import React from "react";
import ScienceCard from "../../../components/ExploreCareerPath/Science/ScienceCard";

const data = [
  {
    id: 1,
    name: "Natural Sciences",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/08/26/23/45/earth-1627193_960_720.jpg",
    description:
      "Natural sciences focus on understanding the physical world, covering fields like physics, chemistry, biology, and earth sciences. It explores the fundamental principles of nature, from atoms to galaxies, helping to explain the laws that govern our universe.",
  },
  {
    id: 2,
    name: "Engineering and Technology",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/08/10/08/07/technology-2614749_960_720.jpg",
    description:
      "Engineering and technology apply scientific principles to design, build, and innovate. It covers civil, mechanical, electrical, and software engineering, solving real-world problems, improving infrastructure, and shaping industries like healthcare, manufacturing, and communication.",
  },
  {
    id: 3,
    name: "Medical and Health Sciences",
    imageUrl:
      "https://cdn.pixabay.com/photo/2014/12/15/13/40/syringe-569111_960_720.jpg",
    description:
      "Medical and health sciences study the human body and diseases, aiming to improve health outcomes. This field includes medicine, nursing, public health, and biomedical research, advancing treatments, and promoting public well-being.",
  },
  {
    id: 4,
    name: "Agricultural and Veterinary Sciences",
    imageUrl:
      "https://cdn.pixabay.com/photo/2017/06/20/10/58/cows-2426469_960_720.jpg",
    description:
      "Agricultural and veterinary sciences focus on crops, livestock, and animal health. These fields enhance farming practices, ensure food security, and improve animal welfare through sustainable methods and biotechnology.",
  },
  {
    id: 5,
    name: "Social Sciences",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/05/18/42/communication-1186552_960_720.jpg",
    description:
      "Social sciences study human behavior and societies. This field covers psychology, sociology, economics, and political science, aiming to understand social interactions, institutions, and cultural influences.",
  },
  {
    id: 6,
    name: "Humanities and the Arts",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/02/19/11/19/library-1206583_960_720.jpg",
    description:
      "Humanities and the arts explore human culture, history, and creativity through literature, philosophy, art, and music. This field examines how people express ideas and create meaning throughout history.",
  },
];

const Science = () => {
  return (
    <>
      <div className="container mb-12">
        <div>
          <h2 className="text-3xl font-bold text-center mb-8 mt-12">
            Fields of Science
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
          {data.map((item) => (
            <ScienceCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Science;
