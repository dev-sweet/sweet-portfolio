import ParticlesBg from "@/components/ui/Home/Banner/ParticlesBg";
const Banner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ParticlesBg />
      <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gradient-to-b from-[#010030] to-[#010030]/50 p-4 text-center z-0">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
          facilis sapiente pariatur! Esse doloremque quae omnis modi ratione sed
          officia recusandae nostrum ipsa temporibus iusto est, tenetur facere
          nihil! Nulla voluptatum quas, dicta voluptatem molestias esse!
          Recusandae suscipit, harum voluptates quae adipisci, repellendus in
          voluptatem commodi, autem molestias eius magni!
        </p>
      </div>
    </div>
  );
};

export default Banner;
