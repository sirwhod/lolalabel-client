import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Composition() {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-lola-red-500 p-8">
      <h2 className="w-full font-anton text-2xl text-lola-white-500">
        Minha composição:
      </h2>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="w-full font-inter text-base text-lola-white-500"
      >
        {`Aqua/Eau/Water, Cetearyl Alcohol, Behentrimonium Methosulfate,
          Caprylic/Capric Triglyceride, Orbignya Oleifera Seed Oil, Peg-180M,
          Phytosteryl/Behenyl,/Octyldodecyl Lauroyl Glutamate, Aqua (and)
          Hydrolyzed Vegetable Protein PG-Propyl Silanetriol, PPG-3 Benzyl Ether
          Myristrate, Theobroma Cacao (Cocoa), Seed Butter, Hydrogenated
          Farnesene, Aloe Barbadensis Leaf Extract, Cetrimonium Chloride, Sodium
          PCA (and) Sodium Lactate (and) Aginine (and) Aspartic acid (and) PCA
          (and) Glycine (and) Alanine (and) Serine (and) Valine (and) Proline
          (and) Threonine (and) Isoleucine (and) Histidine (and)
          Phenylanine/Propylene Glycol, Hydroxyethyl Urea, Disodium EDTA, BHT,
          Citric Acid, Caprylyl Glycol (and) Phenoxyethanol, Fragrance/Parfum,
          Linalool, Limonene.`}
      </ReactMarkdown>
    </div>
  )
}
