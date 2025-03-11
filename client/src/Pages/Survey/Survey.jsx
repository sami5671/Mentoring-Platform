import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Survey = () => {
  // ==================== Formik logic ==============================
  const initialValues = {
    email: "",
    educationStatus: "",
    livingArea: "",
    platforms: [],
    subscribed: "",
    careerConfidence: "",
    careerGuidanceFrequency: "",
    careerChallenges: [],
    connectionDifficulty: "",
    institutionSupport: "",
    careerResources: "",
    careerDecisionOverwhelm: "",
    mentorshipParticipation: "",
    jobReadiness: "",
    preferredGuidanceMethod: [],
    beneficialGuidance: [],
    roadmapInterest: "",
    platformHelpfulness: "",
    mentorFeature: "",
    willingToPay: "",
  };

  const surveyFormSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    educationStatus: Yup.string().required("Required"),
    livingArea: Yup.string().required("Required"),
    platforms: Yup.array().min(1, "Required"),
    subscribed: Yup.string().required("Required"),
    careerConfidence: Yup.string().required("Required"),
    careerGuidanceFrequency: Yup.string().required("Required"),
    careerChallenges: Yup.array().min(1, "Required"),
    connectionDifficulty: Yup.string().required("Required"),
    institutionSupport: Yup.string().required("Required"),
    careerResources: Yup.string().required("Required"),
    careerDecisionOverwhelm: Yup.string().required("Required"),
    mentorshipParticipation: Yup.array().min(1, "Required"),
    jobReadiness: Yup.string().required("Required"),
    preferredGuidanceMethod: Yup.array().min(1, "Required"),
    beneficialGuidance: Yup.array().min(1, "Required"),
    roadmapInterest: Yup.string().required("Required"),
    platformHelpfulness: Yup.string().required("Required"),
    mentorFeature: Yup.string().required("Required"),
    willingToPay: Yup.string().required("Required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Hello");
    console.log("Survey Data:", values);
    setSubmitting(false);
  };
  // =================================================================

  return (
    <section className="flex flex-col items-center">
      <Formik
        initialValues={initialValues}
        validationSchema={surveyFormSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values }) => (
          <div className="lg:mt-24 lg:mb-12 w-full max-w-3xl ">
            <Form className="p-4 border rounded-lg shadow-md bg-slate-200 h-[800px] overflow-y-auto font-bangla text-xl">
              {/* image */}
              <div className="mb-10">
                <img
                  src="https://i.ibb.co/HDfPZDGD/survey.webp"
                  alt="Survey Banner"
                  className="object-cover h-[200px] w-full"
                />
              </div>
              {/* image */}
              <label className="block">
                1. Please kindly provide us your email (আপনার ইমেলটি অনুগ্রহ করে
                আমাদের প্রদান করুন)
              </label>
              <Field
                name="email"
                type="email"
                className="border p-2 w-full rounded-md"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                2. What is your current level of education and employment
                status? (আপনার বর্তমান শিক্ষাগত যোগ্যতা এবং কর্মসংস্থানের অবস্থা
                কী?)
              </label>
              <Field
                as="select"
                name="educationStatus"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="high_school">
                  High school student (উচ্চ বিদ্যালয়ের ছাত্র/ছাত্রী)
                </option>
                <option value="college_employed">
                  College student and employed (কলেজের ছাত্র/ছাত্রী এবং কর্মরত)
                </option>
                <option value="college_unemployed">
                  College student and unemployed (কলেজের ছাত্র/ছাত্রী এবং বেকার)
                </option>
                <option value="university_unemployed">
                  University student and unemployed (বিশ্ববিদ্যালয়ের
                  ছাত্র/ছাত্রী এবং বেকার)
                </option>
                <option value="university_employed">
                  University student and employed (বিশ্ববিদ্যালয়ের ছাত্র/ছাত্রী
                  এবং কর্মরত)
                </option>
                <option value="graduated">
                  Graduated (স্নাতক সম্পন্ন করেছেন)
                </option>
              </Field>
              <ErrorMessage
                name="educationStatus"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                3. Where sort of area does you live in? (আপনি কোন ধরণের এলাকায়
                বসবাস করেন?)
              </label>
              <Field
                as="select"
                name="livingArea"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="rural">
                  Rural area/ Village (গ্রামাঞ্চল/গ্রাম)
                </option>
                <option value="metropolitan">
                  Metropolitan city (মহানগরী)
                </option>
                <option value="district_town">District Town (জেলা শহর)</option>
              </Field>
              <ErrorMessage
                name="livingArea"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                4. Are you familiar with any of the following educational
                platforms? (আপনি নিচের কোন শিক্ষামূলক প্ল্যাটফর্মগুলোর সাথে
                পরিচিত?)
              </label>
              {[
                "Coursera",
                "Udemy",
                "Khan Academy",
                "Skillshare",
                "Edx",
                "Shikho",
                "10 Minutes School",
              ].map((platform) => (
                <div key={platform}>
                  <Field type="checkbox" name="platforms" value={platform} />{" "}
                  {platform}
                </div>
              ))}
              <ErrorMessage
                name="platforms"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                5. Have you ever subscribed to any of their services? (আপনি কি
                কখনও তাদের পরিষেবাগুলোর সাবস্ক্রিপশন নিয়েছেন?)
              </label>
              <Field
                as="select"
                name="subscribed"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="yes">Yes (হ্যাঁ)</option>
                <option value="no">No (না)</option>
                <option value="considered">
                  * No, but I have considered it (না, তবে আমি বিবেচনা করেছি)
                </option>
              </Field>
              <ErrorMessage
                name="subscribed"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                6. How confident and satisfied do you feel about your current
                career path? (আপনার বর্তমান ক্যারিয়ার পথ সম্পর্কে আপনি কতটা
                আত্মবিশ্বাসী এবং সন্তুষ্ট বোধ করেন?)
              </label>
              <Field
                as="select"
                name="careerConfidence"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="confident">
                  Confident and satisfied (আত্মবিশ্বাসী এবং সন্তুষ্ট)
                </option>
                <option value="somewhat">
                  Somewhat confident (কিছুটা আত্মবিশ্বাসী)
                </option>
                <option value="neutral"> Neutral (নিরপেক্ষ)</option>
                <option value="unsure"> Unsure (অনিশ্চিত)</option>
              </Field>
              <ErrorMessage
                name="careerConfidence"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                7. How often do you seek guidance or advice regarding your
                career? (আপনি কতবার আপনার ক্যারিয়ার সম্পর্কিত পরামর্শ গ্রহণ
                করেন?)
              </label>
              <Field
                as="select"
                name="careerGuidanceFrequency"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="frequently"> Frequently (প্রায়ই)</option>
                <option value="occasionally"> Occasionally (মাঝে মাঝে)</option>
                <option value="rarely"> Rarely (কদাচিৎ)</option>
                <option value="never"> Never (কখনও না)</option>
              </Field>
              <ErrorMessage
                name="careerGuidanceFrequency"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                8. What challenges do you face in making career decisions?
                (ক্যারিয়ার সংক্রান্ত সিদ্ধান্ত নিতে আপনি কোন কোন চ্যালেঞ্জের
                সম্মুখীন হন?){" "}
              </label>
              {[
                "Lack of information (তথ্যের অভাব)",
                " Too many options (অত্যধিক বিকল্পের উপস্থিতি)",
                " Lack of clarity about options (বিকল্প সম্পর্কে স্পষ্ট ধারণার অভাব)",
                " Limited access to information (তথ্যে সীমিত প্রবেশাধিকার)",
                " Inadequate guidance from counselors (পরামর্শদাতাদের কাছ থেকে পর্যাপ্ত দিকনির্দেশনার অভাব)",
              ].map((challenge) => (
                <div key={challenge}>
                  <Field
                    type="checkbox"
                    name="careerChallenges"
                    value={challenge}
                  />{" "}
                  {challenge}
                </div>
              ))}
              <ErrorMessage
                name="careerChallenges"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                9. Do you find it difficult to connect with
                professionals/experts in your desired field? (আপনার পছন্দের
                কর্মক্ষেত্রের পেশাদারদের সাথে সংযোগ স্থাপন করা কি আপনার জন্য
                কঠিন?){" "}
              </label>
              <Field
                as="select"
                name="connectionDifficulty"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="yes"> Yes, difficult (হ্যাঁ, কঠিন)</option>
                <option value="not_tried">
                  I haven’t tried (আমি চেষ্টা করিনি)
                  <option value="no"> No, It’s easy (না, এটি সহজ)</option>
                </option>
              </Field>
              <ErrorMessage
                name="connectionDifficulty"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                10. Do you think your current educational institution supports
                your career exploration? (আপনার বর্তমান শিক্ষাপ্রতিষ্ঠান কি
                আপনার ক্যারিয়ার অনুসন্ধানে সহায়ক?)
              </label>
              <Field
                as="select"
                name="institutionSupport"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="yes">Yes (হ্যাঁ)</option>
                <option value="considered">Somewhat (কিছুটা)</option>
                <option value="no">No (না)</option>
              </Field>
              <ErrorMessage
                name="institutionSupport"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                11. Do you feel you have enough resources to understand the pros
                and cons of different career paths? (আপনার কাছে বিভিন্ন
                ক্যারিয়ার পথের সুবিধা এবং অসুবিধা বোঝার জন্য পর্যাপ্ত সম্পদ আছে
                বলে কি মনে করেন?)
              </label>
              <Field
                as="select"
                name="careerResources"
                className="border p-2 w-full rounded-md"
              >
                <option value="">Select</option>
                <option value="yes">Yes (হ্যাঁ)</option>
                <option value="considered">
                  Yes, but they are not comprehensive or well-structured for me
                  (হ্যাঁ, তবে সেগুলো সম্পূর্ণ বা সুসংগঠিত নয়)
                </option>
                <option value="no">No (না)</option>
                <option value="no">
                  Haven’t explored them at all (আমি এখনো এগুলো নিয়ে খোঁজখবর
                  নেইনি)
                </option>
              </Field>
              <ErrorMessage
                name="careerResources"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                12. How often do you feel overwhelmed by career-related
                decisions? (ক্যারিয়ার সংক্রান্ত সিদ্ধান্ত নিতে গিয়ে আপনি কতবার
                বিভ্রান্ত বোধ করেন?)
              </label>
              {[
                " Often (প্রায়ই)",
                " Sometimes (মাঝে মাঝে)",
                " Rarely (কদাচিৎ)",
              ].map((decision) => (
                <div key={decision}>
                  <Field
                    type="radio"
                    name="careerDecisionOverwhelm"
                    value={decision}
                  />
                  {decision}
                </div>
              ))}
              <ErrorMessage
                name="careerDecisionOverwhelm"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                13. Have you ever participated in any mentorship programs
                before? (আপনি কি আগে কখনও কোনো মেন্টরশিপ প্রোগ্রামে অংশগ্রহণ
                করেছেন?)
              </label>
              {[
                " Yes, free online (হ্যাঁ, বিনামূল্যে অনলাইন)",
                " Yes, free offline (হ্যাঁ, বিনামূল্যে অফলাইন)",
                " Yes, paid, online (হ্যাঁ, অর্থপ্রদান করে, অনলাইন)",
                " Yes, paid, offline (হ্যাঁ, অর্থপ্রদান করে, অফলাইন)",
                " No, but interested (না, তবে আগ্রহী)",
                " Yes, interested in future as well (হ্যাঁ, ভবিষ্যতেও আগ্রহী)",
              ].map((participation) => (
                <div key={participation}>
                  <Field
                    type="checkbox"
                    name="mentorshipParticipation"
                    value={participation}
                  />
                  {participation}
                </div>
              ))}
              <ErrorMessage
                name="mentorshipParticipation"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                14. Do you think you are skilled enough to get available job
                opportunities in your field? (আপনার পছন্দের কর্মক্ষেত্রে
                বর্তমানে যে চাকরির সুযোগ আছে, সেগুলোর জন্য নিজেকে যথেষ্ট দক্ষ
                মনে করেন কি?)
              </label>
              {[" Yes (হ্যাঁ)", " Somewhat (কিছুটা)", " No (না)"].map((job) => (
                <div key={job}>
                  <Field type="radio" name="jobReadiness" value={job} />
                  {job}
                </div>
              ))}
              <ErrorMessage
                name="jobReadiness"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                15. What is your preferred method for obtaining career guidance?
                (ক্যারিয়ার পরামর্শ পাওয়ার জন্য আপনার পছন্দের পদ্ধতি কী?)
              </label>
              {[
                " Online resources (অনলাইন সম্পদ)",
                " Counselors/Professionals (পরামর্শদাতা/পেশাদার ব্যক্তিরা)",
                " Family and friends (পরিবার এবং বন্ধুরা)",
                " Other (please specify) (অন্যান্য (অনুগ্রহ করে উল্লেখ করুন))",
              ].map((guidance) => (
                <div key={guidance}>
                  <Field
                    type="checkbox"
                    name="preferredGuidanceMethod"
                    value={guidance}
                  />
                  {guidance}
                </div>
              ))}
              <ErrorMessage
                name="preferredGuidanceMethod"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                16. What type of career guidance would be most beneficial to
                you? (আপনার জন্য কোন ধরণের ক্যারিয়ার পরামর্শ সবচেয়ে উপকারী
                হবে?)
              </label>
              {[
                " Detailed career roadmaps (বিস্তারিত ক্যারিয়ার রোডম্যাপ)",
                " Access to industry professionals (বিশেষজ্ঞদের সাথে সংযোগের সুযোগ)",
                " Regular assessments and feedback (নিয়মিত মূল্যায়ন এবং প্রতিক্রিয়া)",
                " Other (please specify) (অন্যান্য (অনুগ্রহ করে উল্লেখ করুন))",
              ].map((beneficial) => (
                <div key={beneficial}>
                  <Field
                    type="checkbox"
                    name="beneficialGuidance"
                    value={beneficial}
                  />
                  {beneficial}
                </div>
              ))}
              <ErrorMessage
                name="beneficialGuidance"
                component="div"
                className="text-red-500"
              />

              <label className="block mt-2">
                17. Do you think having access to a comprehensive career-roadmap
                would be beneficial for you? (আপনার জন্য একটি বিস্তারিত
                ক্যারিয়ার রোডম্যাপ কি উপকারী হবে বলে মনে করেন?)
              </label>
              {[
                " Yes, very helpful (হ্যাঁ, অত্যন্ত সহায়ক)",
                " I’m interested (আমি আগ্রহী)",
                " No, not really (না, খুব একটা নয়)",
              ].map((job) => (
                <div key={job}>
                  <Field type="radio" name="roadmapInterest" value={job} />
                  {job}
                </div>
              ))}
              <ErrorMessage
                name="roadmapInterest"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                18. Would a platform that gives you all the necessary
                information you need to move from where you are now to your
                dream field be helpful to you? (একটি প্ল্যাটফর্ম যা আপনাকে
                বর্তমান অবস্থান থেকে আপনার স্বপ্নের ক্যারিয়ারে পৌঁছাতে সহায়তা
                করবে, তা আপনার জন্য কতটা উপকারী হবে?)
              </label>
              {[" Yes (হ্যাঁ)", " I’m not sure (আমি নিশ্চিত নই)"].map(
                (roadmap) => (
                  <div key={roadmap}>
                    <Field
                      type="radio"
                      name="platformHelpfulness"
                      value={roadmap}
                    />
                    {roadmap}
                  </div>
                )
              )}
              <ErrorMessage
                name="platformHelpfulness"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                19. If your answer to the previous question was “yes”, would you
                like a feature to be included there, that enables you to connect
                with a professional mentor of your desired field who will guide
                you throughout your journey? (আপনি যদি আগের প্রশ্নের উত্তরে
                'হ্যাঁ' বলে থাকেন, তবে এমন একটি ফিচার পছন্দ করবেন কি, যা আপনাকে
                আপনার পছন্দের ক্ষেত্রের একজন পেশাদার মেন্টরের সঙ্গে সংযোগের
                সুযোগ দেবে?)
              </label>
              {[" Yes (হ্যাঁ)", " No (না)"].map((roadmap) => (
                <div key={roadmap}>
                  <Field type="radio" name="mentorFeature" value={roadmap} />
                  {roadmap}
                </div>
              ))}
              <ErrorMessage
                name="mentorFeature"
                component="div"
                className="text-red-500"
              />
              <label className="block mt-2">
                20. Would you be willing to pay for a real-time, personalized
                career guidance by a professional? (একজন পেশাদারের কাছ থেকে
                সরাসরি ব্যক্তিগত ক্যারিয়ার পরামর্শ নিতে আপনি কি অর্থ প্রদান
                করতে ইচ্ছুক?)
              </label>
              {[
                " Yes (হ্যাঁ)",
                " Yes, but not a large fee (হ্যাঁ, তবে বড় ফি নয়)",
                " No (না)",
              ].map((roadmap) => (
                <div key={roadmap}>
                  <Field type="radio" name="willingToPay" value={roadmap} />
                  {roadmap}
                </div>
              ))}
              <ErrorMessage
                name="willingToPay"
                component="div"
                className="text-red-500"
              />
              <div className="flex justify-end mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-2 rounded-lg"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </section>
  );
};

export default Survey;
