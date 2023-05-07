import React from "react";
import Container from "../components/layouts/Container";
import Flex from "../components/layouts/Flex";
import {BsChevronDown} from "react-icons/bs"

const Home = () => {
  return (
    
    <Container>
      <div className="py-5 text-right flex items-center gap-x-3 justify-end mr-10">
        <h3 className="font-medium text-bl text-lg capitalize">all category</h3>
        <BsChevronDown className="text-bl text-lg"/>
      </div>
      <Flex className="flex-col px-4 gap-y-5 h-[69vh] overflow-x-auto">
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
        <Flex className="w-full items-center justify-between py-8 px-9 rounded-[20px] shadow-bl_shadow hover:bg-primary group ease-out duration-300">
          <div>
            <h3 className="font-medium text-bl text-2xl capitalize group-hover:text-white ease-in duration-300">
              title
            </h3>
          </div>
          <div>
            <h4 className="font-regular text-grey text-lg capitalize group-hover:text-white ease-in duration-300">
              category
            </h4>
          </div>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;
