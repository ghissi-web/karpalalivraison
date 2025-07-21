"use client";

import { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function InscriptionLivreur() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    cniRecto: null,
    cniVerso: null,
    photoMoto: null,
    plaque: null,
    photoLivreur: null,
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const uploadImage = async (file: File, path: string) => {
    const { data, error } = await supabase.storage.from("livreurs").upload(path, file, { upsert: true });
    if (error) throw error;
    return supabase.storage.from("livreurs").getPublicUrl(path).data.publicUrl;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      // Nettoyage du nom pour le path
      const safeNom = form.nom.replace(/[^a-zA-Z0-9_-]/g, "");
      const timestamp = Date.now();
      const urls = await Promise.all([
        uploadImage(form.cniRecto, `cni_recto_${safeNom}_${timestamp}`),
        uploadImage(form.cniVerso, `cni_verso_${safeNom}_${timestamp}`),
        uploadImage(form.photoMoto, `photo_moto_${safeNom}_${timestamp}`),
        uploadImage(form.plaque, `plaque_${safeNom}_${timestamp}`),
        uploadImage(form.photoLivreur, `photo_livreur_${safeNom}_${timestamp}`),
      ]);
      // Insertion dans la table livreurs
      const { error } = await supabase.from("livreurs").insert([
        {
          nom: form.nom,
          email: form.email,
          cni_recto_url: urls[0],
          cni_verso_url: urls[1],
          photo_moto_url: urls[2],
          plaque_url: urls[3],
          photo_livreur_url: urls[4],
        },
      ]);
      if (error) throw error;
      setMessage("Inscription réussie ! Nous vous contacterons après vérification.");
      setForm({ nom: "", email: "", cniRecto: null, cniVerso: null, photoMoto: null, plaque: null, photoLivreur: null });
    } catch (err: any) {
      setMessage("Erreur lors de l'inscription : " + err.message);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-6">Inscription livreur</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Nom complet"
          value={form.nom}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border rounded p-2"
        />
        <label className="block">Photo CNI (recto)
          <input type="file" name="cniRecto" accept="image/*" onChange={handleChange} required className="mt-1" />
        </label>
        <label className="block">Photo CNI (verso)
          <input type="file" name="cniVerso" accept="image/*" onChange={handleChange} required className="mt-1" />
        </label>
        <label className="block">Photo de la moto
          <input type="file" name="photoMoto" accept="image/*" onChange={handleChange} required className="mt-1" />
        </label>
        <label className="block">Photo de la plaque d'immatriculation
          <input type="file" name="plaque" accept="image/*" onChange={handleChange} required className="mt-1" />
        </label>
        <label className="block">Photo du livreur
          <input type="file" name="photoLivreur" accept="image/*" onChange={handleChange} required className="mt-1" />
        </label>
        <button type="submit" disabled={loading} className="bg-green-600 text-white rounded p-2 font-semibold hover:bg-green-700">
          {loading ? "Envoi en cours..." : "S'inscrire"}
        </button>
        {message && <div className="mt-2 text-center text-sm text-red-600">{message}</div>}
      </form>
    </div>
  );
} 