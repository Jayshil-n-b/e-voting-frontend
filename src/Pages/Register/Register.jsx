import {
  Box,
  Button,
  Group,
  Paper,
  TextInput,
  PasswordInput,
  MultiSelect,
  Text,
  Title,
  Space,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import apiEndpoint from "../../Interfaces/Axios";
import { showNotification } from "@mantine/notifications";
import { CheckIcon, Cross1Icon } from "@modulz/radix-icons";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const registerForm = useForm({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      aadharNo: "",
    },
    validate: {
      username: (value) => (value.length ? null : "Please Enter Username"),
      password: (value) => (value.length ? null : "Please Enter Password"),
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
      aadharNo: (value) =>
        value.length === 12 ? null : "Please Enter Valid Aadhar No.",
    },
  });

  // const handleSubmit = async (values) => {
  //   try {
  //     const response = await apiEndpoint.post("/register", {
  //       username: values.username,
  //       password: values.password,
  //       aadhar: values.aadhar,
  //     });
  //     const responseData = response.data;
  //     console.log(responseData);
  //     showNotification({
  //       title: "Register Success",
  //       message: "Practice Voting!!",
  //       color: "teal",
  //       icon: <CheckIcon />,
  //     });
  //     navigate("/login");
  //   } catch (error) {
  //     showNotification({
  //       title: "Incorrect Credentials",
  //       message: "Please try again!!",
  //       color: "red",
  //       icon: <Cross1Icon />,
  //     });
  //     console.log(error.response);
  //   }
  // };

  const handleSubmit = async (values) => {
    console.log(values);
  };

  return (
    <Box sx={{ maxWidth: 300 }} mx="auto">
      <Title>Register to Vote...</Title>
      <Space mb={20} />
      <form onSubmit={registerForm.onSubmit(handleSubmit)}>
        <TextInput
          required
          label="Username"
          placeholder="Username"
          {...registerForm.getInputProps("username")}
        />

        <TextInput
          required
          label="Aadhar No."
          placeholder="Aadhar No."
          {...registerForm.getInputProps("aadharNo")}
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Password"
          {...registerForm.getInputProps("password")}
        />

        <PasswordInput
          required
          label="Confirm Password"
          placeholder="Confirm Password"
          {...registerForm.getInputProps("confirmPassword")}
        />

        <Group position="right" mt="md">
          <Text
            sx={{
              "&:hover": { cursor: "pointer" },
            }}
            onClick={() => navigate("/login")}
            style={{ textDecoration: "underline" }}
          >
            Already Registered ?
          </Text>
        </Group>

        <Group position="center" mt="md">
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Box>
  );
}
