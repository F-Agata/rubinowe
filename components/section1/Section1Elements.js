import React from "react";
import styled from "styled-components";
import Image from "next/image";

import icon01Section1 from "../../public/why01.svg";
import icon02Section1 from "../../public/why02.svg";
import icon03Section1 from "../../public/why03.svg";
import icon04Section1 from "../../public/why04.svg";
import icon05Section1 from "../../public/why06.svg";
import icon06Section1 from "../../public/why05.svg";
import TitleOfSmallPart from "../../stylesjs/TitleOfSmallPart";
import TextSmallDark from "../../stylesjs/TextSmallDark";

const section1Elements = [
  {
    name: "First-Class Developers",
    id: "section1project01",
    icon: icon01Section1,
    text: "When you work with Rubinowe or hire developers from us, you strengthen your project with top talent. All our developers have many years of experience.",
  },
  {
    name: "We Build Relationships",
    id: "project02",
    icon: icon02Section1,
    text: "95% of our clients will hire us again. They trust us to deliver just what they need. And we do just that. Always on time, with zero hassle.",
  },
  {
    name: "Cost effective",
    id: "project03",
    icon: icon03Section1,
    text: "Our costs are determined by one single factor: Your budget. We adapt to you and stick to the numbers we agree on, from the beginning to the very end.",
  },
  {
    name: "Boost Your Savings",
    id: "section1project04",
    icon: icon04Section1,
    text: "Get in touch with us and we’ll offer you a solution that will not just save you money and improve your processes but actually help you fulfil your business goals.",
  },
  {
    name: "Reduce Costs",
    id: "section1project05",
    icon: icon05Section1,
    text: "Our principle: You only pay for what you need. We reduce your costs (by up to 70%!) by optimising performance and resources.",
  },
  {
    name: "Receive Guidance",
    id: "section1project06",
    icon: icon06Section1,
    text: "We offer constant guidance and insights, sharing our knowledge so that you can make the right decision every time.",
  },
];

const WrappSection1Elements = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const WrappElement = styled.div`
  background-color: ${(props) => props.theme.colors.colorPrimary};
  box-shadow: 0px 20px 50px rgba(59, 62, 67, 0.05);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 15px;
  //border: red 2px solid;
  margin-bottom: 20px;
  padding: 50px 20px 50px 50px;
  width: 100%;
  @media (min-width: 700px) {
    width: 49%;
  }
  @media (min-width: 1170px) {
    width: 32%;
  }
`;

const WrappIcon = styled.div`
  width: 100px;
  height: 100px;
  box-shadow: 0px 10px 20px rgba(197, 158, 145, 0.1);
  border-radius: 15px;
  background-color: ${(props) => props.theme.colors.colorTitleVerySmall};
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleElement = styled(TitleOfSmallPart)`
  margin-bottom: 15px;
`;

const Text = styled(TextSmallDark)``;

const Section1Elements = () => {
  const section1Element = section1Elements.map((item) => (
    <WrappElement key={item.id}>
      <WrappIcon>
        <Image src={item.icon} height={80} width={80} />
      </WrappIcon>
      <TitleElement href={"#"}>{item.name}</TitleElement>
      <Text>{item.text}</Text>
    </WrappElement>
  ));

  return <WrappSection1Elements>{section1Element}</WrappSection1Elements>;
};

export default Section1Elements;
