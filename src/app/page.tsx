import Image from "next/image";
import vcImage from "../../public/vice_chancellor.jpeg";

export default function Home() {
  return (
    <main className="mb-20 p-2 pt-12 md:p-6 md:pt-12">
      <h1 className="text-2xl font-bold md:text-3xl">Welcome to our school</h1>
      <div className="mt-8">
        <figure>
          <Image src={vcImage} width={100} height={100} alt="vice chancellor" />
          <figcaption className="text-sm text-gray-500">
            Vice Chancellor
          </figcaption>
        </figure>
        <p className="mt-4 font-semibold leading-7">
          Explore our campus and find your way around with our interactive map.
          Whether you&apos;re a student, parent, or visitor, this map will help
          you navigate our school easily and efficiently. Discover classrooms,
          offices, common areas, sports facilities, and other important
          locations within our campus. With user-friendly features and intuitive
          design, our map ensures that you have a seamless experience in finding
          your desired destination. Additionally, you can filter locations based
          on categories, such as academic buildings, dormitories, parking areas,
          or event venues, to personalize your search. Stay updated on any
          temporary closures, construction areas, or changes in campus layout
          through real-time notifications displayed on our map. We constantly
          strive to provide accurate information to ensure you have the most
          reliable directions possible. We hope that our school map website
          becomes a valuable tool for you to navigate our campus confidently and
          effortlessly. Start exploring now and make the most of your time at
          our school! Note: It is important to customize the content based on
          the specific features and layout of the school.
        </p>
      </div>
    </main>
  );
}
