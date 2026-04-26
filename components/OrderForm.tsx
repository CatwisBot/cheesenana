"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, MessageCircle, PhoneCall, Store, Truck } from "lucide-react";

const WHATSAPP_NUMBER = "6289636579514";
const INSTAGRAM_URL = "https://www.instagram.com/cheesenanaa/";

const flavorOptions = [
  "Cheesenana Original",
  "Coklat Pisang",
  "Matcha Pisang",
  "Taro Pisang",
] as const;

const packagePresets = [
  { key: "Paket hemat", pcs: 3 },
  { key: "Paket kenyang", pcs: 5 },
  { key: "Paket sharing", pcs: 10 },
] as const;

const toppingOptions = ["Oreo crumble", "Choco chips", "Keju ekstra"] as const;

type PackagePresetKey = (typeof packagePresets)[number]["key"];
type PackageType = PackagePresetKey | "Custom";
type DeliveryMethod = "Ambil di tempat" | "Diantar";

type OrderFormData = {
  name: string;
  phone: string;
  flavor: string;
  packageType: PackageType;
  customPieces: number;
  deliveryMethod: DeliveryMethod;
  toppings: string[];
  location: string;
  notes: string;
};

const initialFormData: OrderFormData = {
  name: "",
  phone: "",
  flavor: flavorOptions[0],
  packageType: "Paket hemat",
  customPieces: 1,
  deliveryMethod: "Ambil di tempat",
  toppings: [],
  location: "",
  notes: "",
};

function getPresetPieces(packageType: PackageType) {
  const preset = packagePresets.find((item) => item.key === packageType);
  return preset?.pcs;
}

function getPieceCount(formData: OrderFormData) {
  const presetPieces = getPresetPieces(formData.packageType);
  if (presetPieces) {
    return presetPieces;
  }
  return Math.max(1, formData.customPieces);
}

function formatOrderTime() {
  const now = new Date();
  const pad = (value: number) => value.toString().padStart(2, "0");
  const datePart = `${pad(now.getDate())}/${pad(now.getMonth() + 1)}/${now.getFullYear()}`;
  const timePart = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  return `${datePart} ${timePart} WIB`;
}

function sanitizeMessageValue(value: string) {
  return value
    .normalize("NFKC")
    .replace(/[\u200B-\u200F\uFEFF]/g, "")
    .replace(/[\\*_~`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildWhatsAppMessage(formData: OrderFormData, pieceCount: number) {
  const nameText = sanitizeMessageValue(formData.name) || "-";
  const phoneText = sanitizeMessageValue(formData.phone) || "-";
  const flavorText = sanitizeMessageValue(formData.flavor) || "-";
  const toppingText =
    formData.toppings.length > 0
      ? sanitizeMessageValue(formData.toppings.join(", "))
      : "Tanpa topping tambahan";
  const locationText = formData.location.trim() ? sanitizeMessageValue(formData.location) : "-";
  const notesText = formData.notes.trim() ? sanitizeMessageValue(formData.notes) : "-";
  const deliveryText = sanitizeMessageValue(formData.deliveryMethod) || "-";
  const packageText =
    formData.packageType === "Custom"
      ? `Custom - ${pieceCount} pcs`
      : `${formData.packageType} - ${pieceCount} pcs`;
  const cleanPackageText = sanitizeMessageValue(packageText) || "-";
  const orderTime = formatOrderTime();

  return [
    "Halo Admin Cheesenana",
    "",
    "Saya ingin pesan dengan detail berikut:",
    "",
    `- Nama: ${nameText}`,
    `- No WhatsApp: ${phoneText}`,
    `- Varian: ${flavorText}`,
    `- Paket: ${cleanPackageText}`,
    `- Topping: ${toppingText}`,
    `- Metode Ambil: ${deliveryText}`,
    `- Lokasi/Patokan: ${locationText}`,
    `- Catatan: ${notesText}`,
    `- Waktu Order: ${orderTime}`,
    "",
    "Mohon info total harga, ongkir (jika diantar), dan estimasi siapnya.",
    "Terima kasih.",
  ].join("\n");
}

export default function OrderForm() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [formError, setFormError] = useState("");
  const [formNotice, setFormNotice] = useState("");

  const pieceCount = useMemo(() => getPieceCount(formData), [formData]);

  const updateField = <K extends keyof OrderFormData>(field: K, value: OrderFormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePackageTypeSelect = (packageType: PackageType) => {
    setFormData((prev) => ({
      ...prev,
      packageType,
      customPieces: packageType === "Custom" ? Math.max(1, prev.customPieces) : prev.customPieces,
    }));
  };

  const toggleTopping = (topping: string) => {
    setFormData((prev) => {
      const isSelected = prev.toppings.includes(topping);
      return {
        ...prev,
        toppings: isSelected
          ? prev.toppings.filter((item) => item !== topping)
          : [...prev.toppings, topping],
      };
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError("");
    setFormNotice("");

    if (!formData.name.trim()) {
      setFormError("Nama pemesan wajib diisi.");
      return;
    }

    const sanitizedPhone = formData.phone.replace(/\D/g, "");
    if (sanitizedPhone.length < 9) {
      setFormError("Nomor WhatsApp belum valid.");
      return;
    }

    if (formData.packageType === "Custom" && formData.customPieces < 1) {
      setFormError("Jumlah pcs custom minimal 1.");
      return;
    }

    if (formData.deliveryMethod === "Diantar" && !formData.location.trim()) {
      setFormError("Untuk metode diantar, isi lokasi atau patokan.");
      return;
    }

    const message = buildWhatsAppMessage(formData, pieceCount);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = whatsappUrl;
      return;
    }

    setFormNotice("WhatsApp sudah dibuka. Cek pesannya lalu klik kirim.");
  };

  const toppingSummary =
    formData.toppings.length > 0 ? formData.toppings.join(", ") : "Tanpa topping tambahan";
  const packageSummary =
    formData.packageType === "Custom"
      ? `Custom (${pieceCount} pcs)`
      : `${formData.packageType} (${pieceCount} pcs)`;

  return (
    <section className="relative">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-md rounded-4xl md:rounded-[48px] p-5 md:p-10 max-w-6xl mx-auto shadow-2xl border-4 border-white"
      >
        <div className="text-center mb-8 md:mb-10 px-2">
          <h1 className="text-3xl md:text-5xl font-display font-extrabold text-dark mb-3 md:mb-4 leading-tight">
            Form Pemesanan
            <span className="text-accent"> Cheesenana</span>
          </h1>
          <p className="text-sm md:text-lg text-dark/80 max-w-3xl mx-auto font-medium">
            Pilih varian rasa dulu (Cheesenana Original atau varian lain), lalu tentukan paket. Untuk pesanan 1 pcs, langsung pilih opsi Custom.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-5 md:gap-7">
          <div className="rounded-3xl bg-dark text-white p-5 md:p-7 relative overflow-hidden">
            <div className="absolute -top-20 -right-12 h-40 w-40 rounded-full bg-primary/20 blur-2xl"></div>
            <div className="relative">
              <p className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-bold tracking-wide">
                ORDER FLOW
              </p>
              <h2 className="mt-4 text-2xl md:text-3xl font-display font-bold leading-tight">
                Paket preset dan custom sudah dipisah biar tidak membingungkan.
              </h2>
              <p className="mt-3 text-sm md:text-base text-white/80 leading-relaxed">
                Aturan paket: Hemat otomatis 3 pcs, Kenyang 5 pcs, Sharing 10 pcs. Jika ingin 1 pcs atau jumlah lain, gunakan opsi Custom.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Pilih varian: Cheesenana Original atau varian pisang favorit.",
                  "Pilih paket preset atau custom.",
                  "Klik kirim agar format order otomatis masuk WhatsApp.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm md:text-base text-white/90">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 space-y-3">
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm md:text-base font-bold text-white shadow-lg hover:brightness-105 transition"
                >
                  <PhoneCall className="h-4 w-4" />
                  Chat langsung tanpa form
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/25 px-4 py-3 text-sm md:text-base font-bold text-white/95 hover:bg-white/10 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                  Lihat update menu di Instagram
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-dark/10 bg-white p-5 md:p-7 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-bold text-dark">Nama pemesan</span>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Contoh: Nanda"
                  className="mt-1.5 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-3 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  required
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-dark">Nomor WhatsApp</span>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="08xxxxxxxxxx"
                  className="mt-1.5 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-3 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/70"
                  required
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-sm font-bold text-dark">Varian rasa</span>
                <select
                  value={formData.flavor}
                  onChange={(event) => updateField("flavor", event.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                >
                  {flavorOptions.map((flavor) => (
                    <option key={flavor} value={flavor}>
                      {flavor}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-4">
              <p className="text-sm font-bold text-dark">Jenis paket</p>
              <div className="mt-2 grid sm:grid-cols-2 gap-2">
                {packagePresets.map((preset) => {
                  const active = formData.packageType === preset.key;

                  return (
                    <button
                      key={preset.key}
                      type="button"
                      onClick={() => handlePackageTypeSelect(preset.key)}
                      className={`rounded-xl border px-3 py-3 text-left transition ${
                        active
                          ? "border-dark bg-dark text-white"
                          : "border-dark/15 bg-white text-dark hover:bg-dark/5"
                      }`}
                    >
                      <p className="text-sm font-bold">{preset.key}</p>
                      <p className={`text-xs mt-1 ${active ? "text-white/80" : "text-dark/60"}`}>
                        Otomatis {preset.pcs} pcs
                      </p>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => handlePackageTypeSelect("Custom")}
                  className={`rounded-xl border px-3 py-3 text-left transition ${
                    formData.packageType === "Custom"
                      ? "border-dark bg-dark text-white"
                      : "border-dark/15 bg-white text-dark hover:bg-dark/5"
                  }`}
                >
                  <p className="text-sm font-bold">Custom</p>
                  <p
                    className={`text-xs mt-1 ${
                      formData.packageType === "Custom" ? "text-white/80" : "text-dark/60"
                    }`}
                  >
                    Untuk 1 pcs atau jumlah bebas
                  </p>
                </button>
              </div>

              <div className="mt-3 rounded-xl border border-dark/10 bg-secondary px-3.5 py-3">
                {formData.packageType === "Custom" ? (
                  <label className="block">
                    <span className="text-xs font-bold text-dark/75 uppercase tracking-wide">
                      Jumlah pcs custom
                    </span>
                    <input
                      type="number"
                      min={1}
                      max={50}
                      value={formData.customPieces}
                      onChange={(event) => {
                        const nextValue = Number(event.target.value);
                        updateField("customPieces", Number.isNaN(nextValue) ? 1 : nextValue);
                      }}
                      className="mt-1.5 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-2.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/70"
                      required
                    />
                  </label>
                ) : (
                  <p className="text-sm text-dark/80">
                    {formData.packageType} dipilih, jadi jumlah otomatis <span className="font-bold">{pieceCount} pcs</span>.
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm font-bold text-dark">Metode pengambilan</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {([
                  { label: "Ambil di tempat", icon: Store },
                  { label: "Diantar", icon: Truck },
                ] as const).map((method) => {
                  const isActive = formData.deliveryMethod === method.label;
                  const Icon = method.icon;

                  return (
                    <button
                      key={method.label}
                      type="button"
                      onClick={() => updateField("deliveryMethod", method.label)}
                      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-3 text-sm font-bold transition ${
                        isActive
                          ? "border-dark bg-dark text-white"
                          : "border-dark/15 bg-white text-dark hover:bg-dark/5"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {method.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <fieldset className="mt-4">
              <legend className="text-sm font-bold text-dark">Topping tambahan</legend>
              <div className="mt-2 grid sm:grid-cols-3 gap-2">
                {toppingOptions.map((topping) => {
                  const selected = formData.toppings.includes(topping);

                  return (
                    <label
                      key={topping}
                      className={`cursor-pointer rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                        selected
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-dark/15 bg-white text-dark hover:bg-dark/5"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleTopping(topping)}
                        className="sr-only"
                      />
                      {topping}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-4 grid gap-4">
              <label className="block">
                <span className="text-sm font-bold text-dark">Lokasi atau patokan</span>
                <textarea
                  value={formData.location}
                  onChange={(event) => updateField("location", event.target.value)}
                  placeholder={
                    formData.deliveryMethod === "Diantar"
                      ? "Contoh: Jl. Melati No. 20, dekat minimarket"
                      : "Opsional jika ambil di tempat"
                  }
                  className="mt-1.5 h-20 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-3 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/70"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-dark">Catatan tambahan</span>
                <textarea
                  value={formData.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  placeholder="Contoh: kirim setelah maghrib"
                  className="mt-1.5 h-20 w-full rounded-xl border border-dark/15 bg-white px-3.5 py-3 text-sm text-dark placeholder:text-dark/40 focus:outline-none focus:ring-2 focus:ring-primary/70"
                />
              </label>
            </div>

            <div className="mt-4 rounded-2xl bg-dark px-4 py-3 text-white">
              <p className="text-xs font-bold tracking-wide text-white/80">RINGKASAN CEPAT</p>
              <p className="mt-1 text-sm text-white/90">{packageSummary} • {formData.flavor}</p>
              <p className="mt-1 text-sm text-white/75">Topping: {toppingSummary}</p>
            </div>

            {formError ? <p className="mt-3 text-sm font-semibold text-red-600">{formError}</p> : null}
            {formNotice ? (
              <p className="mt-3 text-sm font-semibold text-emerald-600">{formNotice}</p>
            ) : null}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="mt-5 w-full rounded-2xl bg-[#25D366] px-5 py-4 text-sm md:text-base font-bold text-white shadow-lg hover:shadow-[#25D366]/40 transition inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              Kirim Form ke WhatsApp
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
