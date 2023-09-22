import { render } from "@testing-library/react";
import React from "react";
import {
  GithubSvg,
  InstagramSvg,
  LinkedInSvg,
  TwitterSvg,
  WhatsappSvg,
} from "./SocialMedia";
import { EmailSvg } from "./Communication";

describe("Svg Icons Render Test", () => {
  // email test
  test("Renders Email Svg icon component with size 40", () => {
    render(<EmailSvg size={40} />);
  });

  test("Renders Email Svg icon component with default size", () => {
    render(<EmailSvg />);
  });

  // github test
  test("Renders Github Svg icon component with size 40", () => {
    render(<GithubSvg size={40} />);
  });

  test("Renders Github Svg icon component with default size", () => {
    render(<GithubSvg />);
  });

  // Instagram tests
  test("Renders Instagram Svg icon component with size 40", () => {
    render(<InstagramSvg size={40} />);
  });

  test("Renders Instagram Svg icon component with default size", () => {
    render(<InstagramSvg />);
  });

  // Linked In tests
  test("Renders LinkedIn Svg icon component", () => {
    render(<LinkedInSvg size={40} />);
  });

  // Twitter tests
  test("Renders Twitter Svg icon component", () => {
    render(<TwitterSvg size={40} />);
  });

  // Whatsapp tests
  test("Renders Whatsapp Svg icon component", () => {
    render(<WhatsappSvg size={40} />);
  });
});
