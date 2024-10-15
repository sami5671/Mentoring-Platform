import ScienceCard from "../../../components/ExploreCareerPath/Science/ScienceCard";
import { useGetScienceCareerPathQuery } from "../../../features/ExploreCareerPath/exploreCareerPathApi";
import Container from "../../../Shared/Container";

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
  // ---------------------------Data query here -------------------------------------
  const {
    data: scienceFields,
    isLoading,
    isError,
  } = useGetScienceCareerPathQuery();

  // ----------------------------------------------------------------
  return (
    <>
      <Container>
        <div className="mb-12">
          {/* Heading and Description */}
          <div className="text-center my-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Fields of Science
            </h1>
            <div className="">
              <p className="text-lg lg:text-xl text-gray-500">
                Embark on a journey to explore exciting career paths tailored to
                your passion and potential. Choose your track, and unlock
                endless possibilities in Science, Arts, or Commerce.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:mt-20 items-center">
            {scienceFields?.map((item) => (
              <ScienceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Science;
