import { Box, Flex } from "@chakra-ui/react";
import { Image, Typography } from "antd";
import learn1 from "../../../../../assets/learn2.png";
import ArticleTag from "./tag";

const LearnArticle = () => {
  const { Text } = Typography;
  return (
    <Flex
      direction="column"
      fontFamily="IBM Plex Sans, sans-serif"
      marginTop="15px"
      w="100%"
    >
      {/* image */}
      <Image src={learn1} preview={false} />

      {/* author*/}
      <Text
        style={{
          fontFamily: "IBM Plex Sans, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "#073DFC",
          marginTop: 10,
        }}
      >
        Amani John . 20 Jul 2023
      </Text>

      {/* title */}
      <Text
        style={{
          fontFamily: "IBM Plex Sans, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          color: "#000",
          marginBottom: 0,
        }}
      >
       Why Vegeterians Will Live Longer?
      </Text>

      {/* desc */}
      <Text
        style={{
          fontFamily: "IBM Plex Sans, sans-serif",
          fontSize: "11px",
          fontWeight: 400,
          color: "#6D6D6D",
        }}
      >
      Lower risk of chronic diseases, Healthier body weight, Lower intake of saturated fat, Lower risk of chronic diseases, Healthier body weight, Lower intake of saturated fat......
      </Text>

      {/* tags */}
      <Flex gap="10px" marginTop="10px">
        <ArticleTag
          rightElement={<Box boxSize="6px" bg="#F7CB73" rounded="3xl"></Box>}
          text="Disease"
        />
        <ArticleTag
          rightElement={<Box boxSize="6px" bg="#F7CB73" rounded="3xl"></Box>}
          text="Vegeterians"
        />
      </Flex>
    </Flex>
  );
};

export default LearnArticle;
