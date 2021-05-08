import { Chart, CountryPicker, Cards } from "../components";
import styled from "styled-components";
import { useState } from "react";
import { fetchData } from "../api/";
export default function IndexPage(props) {
  const [country, setCountry] = useState("");
  const [data, setData] = useState(props.data);

  const handleCountryChange = async (country) => {
    const data = await fetchData(country);
    setData(data);
    setCountry(country);
  };
  return (
    <Container>
      <Image src="https://i.ibb.co/7QpKsCX/image.png" alt="COVID-19"></Image>
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </Container>
  );
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const data = await fetchData();

  // Pass post data to the page via props
  return { props: { data }, revalidate: 10 };
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media only screen and (max-width: 770px) {
    margin: 0 10%;
  }
`;
const Image = styled.img`
  width: 370px;
  margin-top: 50px;
  @media only screen and (max-width: 770px) {
    width: 100%;
  }
`;
