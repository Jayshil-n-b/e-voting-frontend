import {
  Divider,
  Text,
  Autocomplete,
  Group,
  Avatar,
  Image,
  SimpleGrid,
  Title,
  Container,
  Grid,
  Badge,
  Space,
} from "@mantine/core";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Search } from "tabler-icons-react";
import { data } from "../../resources/searchArray";
import logo from "../../resources/logo.png";
import MyMenu from "./MyMenu";
// import { DeviceGamepad } from ''

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState("");

  const handleChange = (val) => {
    navigate(`/game/${val.appid}`);
    setValue("");
    if (location.pathname.startsWith("/game")) navigate(0);
  };

  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 600, cols: 1, spacing: "xs" }]}
    >
      <Group position="left">
        <Image
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={() => navigate("/")}
          src={logo}
          width={150}
          style={{ marginTop: 5, marginBottom: 5, marginLeft: 5 }}
        />
        <Divider orientation="vertical" />
        <Space w="s" />
        <Text
          sx={{
            "&:hover": { cursor: "pointer", color: "red" },
          }}
          onClick={() => navigate("/elections ")}
          style={{ fontSize: 18 }}
        >
          Elections
        </Text>
        <Space w="s" />
        <Text
          sx={{
            "&:hover": { cursor: "pointer", color: "red" },
          }}
          onClick={() => navigate("/host")}
          style={{ fontSize: 18 }}
        >
          Host
        </Text>
        {/* <Divider orientation="vertical" /> */}
      </Group>

      <Group position="right">
        {/* <a href="https://github.com/Jayshil-n-b/game-buddy-jnb-microsoft">
          <Badge
            sx={{
              "&:hover": { color: "white", fontSize: 10, cursor: "pointer" },
            }}
            color={"pink"}
          >
            Github
          </Badge>
        </a> */}
        <MyMenu />
      </Group>
    </SimpleGrid>
  );
}
