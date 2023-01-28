import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { SelectedPage, BenefitType } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import React from "react";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100s of Divers Classes",
    description:
      "Work Up a Sweat with Our Cardio and Strength Training, Stretch Out With Some Yoga or just have Fun Dancing with a group.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Professional Trainers",
    description:
      "Let our Trainers Coach You to Your Goals if it's Massive Gains or Trimming Your Waist.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/** HEADER **/}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST A GYM!</HText>
          <p className="my-5 text-sm">
            We are a community of people who are passionate about fitness and
            want to help you achieve your goals.
          </p>
        </motion.div>

        {/** BENEFITS **/}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/** GRAPHICS AND DESCRIPTION **/}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/** GRAPHICS **/}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/**DESCRIPTION **/}
          <div>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, nisl eget ultricies tincidunt, nunc elit ultrices
            </p>
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              mi a
            </p>
          </div>
          {/*BUTTON*/}
          <div className=" relative mt-16">
            <div
              className="before: before: z-[-1]
            content-sparkles before:absolute
            before:-bottom-20 before:right-40"
            >
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
            {/*TITLE*/}
            <div className="relative">
              <div className="before:absolut before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div>
                    <HText>
                      MILLIONS OF HAPPY MEMBERS GETTING{" "}
                      <span className="text-primary-500">FIT</span>
                    </HText>
                  </div>
                </motion.div>
              </div>
            </div>
            {/*DESCRIPTION*/}
            <div>
              {/*BUTTON*/}
              <div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
