import Image from "next/image"

const Homepage = () => {
  return (
    // Setiap produk kerajinan punya makna, dan setiap pembeli bisa membuat cerita (story) mereka sendiri dari barang itu.
    <div className='relative aspect-3/1 mb-12 rounded-lg overflow-hidden'>
      <Image src="/a.jpg" alt="Bamboo" fill className="object-cover" />
    </div>
  )
}

export default Homepage