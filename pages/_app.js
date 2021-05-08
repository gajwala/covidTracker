import App from "next/app";
import React from "react";
import "../css/style.css";
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
