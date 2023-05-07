import React from "react";
import Container from "./layouts/Container";
import Flex from "./layouts/Flex";
import {IoMdSettings} from 'react-icons/io'

const Header = () => {
  return (
    <div className="border-b-[4px] border-[#fff]">
      <Container>
        <Flex className="items-center justify-between py-4 cursor-pointer px-10">
          <div className="w-[50px] h-[50px] rounded-full bg-black"></div>
          <div>
            <h5 className="font-semibold text-2xl text-bl capitalize">
              amar to-do
            </h5>
          </div>
          <div>
            <IoMdSettings className="text-2xl text-grey cursor-pointer"/>
        </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
