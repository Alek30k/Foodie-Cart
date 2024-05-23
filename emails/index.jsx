import {
  Body,
  Container,
  Column,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

export const Email = (cart, total) => (
  <Html>
    <Head />
    <Preview>Apple Receipt</Preview>

    <Body style={main}>
      <Container style={container}>
        <Section>
          <Row>
            <Column align="center" style={tableCell}>
              <Text style={heading}>Food Order Confirmation</Text>
            </Column>
          </Row>
        </Section>
        <Section>
          <Text style={cupomText}>Thank you for your order!</Text>
        </Section>
        <Section>
          <Text align="center" style={supStyle}>
            Your order has benn confirmed and will be delivered shortly.
          </Text>
        </Section>
        <table style={table}>
          <thead className="p-[8px] border border-gray-400">
            <tr>
              <th style={thTd}>Product Name</th>
              <th style={thTd}>Restaurant</th>
              <th style={thTd}>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={index}>
                <td style={thTd}>{item.productName}</td>
                <td style={thTd}>{item.restaurant.name}</td>
                <td style={thTd}>{item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Hr style={productPriceLine} />
        <Section align="center">
          <Row>
            <Column style={tableCell} align="center">
              <Text style={productPriceTotal}>TOTAL</Text>
            </Column>
            <Column style={productPriceVerticalLine}></Column>
            <Column style={productPriceLargeWrapper}>
              <Text style={productPriceLarge}>${total.toFixed(2)}</Text>
              {/* <Text style={productPriceLarge}>$123</Text> */}
            </Column>
          </Row>
        </Section>
        <Hr />

        <Section>
          <Text align="center" style={InfoStyle}>
            Delivery Information
          </Text>
        </Section>

        <Text style={footerTextCenter}>
          {" "}
          En Foodie Cart podés dejar volar tu imaginación porque ahora todo lo
          que quieras lo llevamos directo a donde estés, ¡en minutos! Pedí a los
          mejores restaurantes, hacé el pedido de tus platos favoritos y ¡mucho
          más! En simples pasos podés tener tu sabrosos gustos directamente en
          tu puerta: descubrí, pedí y recibí a domicilio con Foodie Cart
          <Link href="https://foodie-cart-steel.vercel.app/">Foodie Cart</Link>
        </Text>
        <Section>
          <Row>
            <Column align="center" style={footerIcon}>
              <Img
                src="https://github.com/Alek30k/Foodie-Cart/assets/101005998/801c18c7-55b6-43db-939d-4b061b079153"
                width="326"
                height="56"
                alt="logo"
              />
            </Column>
          </Row>
        </Section>
        <Text style={footerLinksWrapper}>
          <Link href="https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/accountSummary?mt=8">
            Account Settings
          </Link>{" "}
          •{" "}
          <Link href="https://www.apple.com/legal/itunes/us/sales.html">
            Terms of Sale
          </Link>{" "}
          •{" "}
          <Link href="https://www.apple.com/legal/privacy/">
            Privacy Policy{" "}
          </Link>
        </Text>
        <Text style={footerCopyright}>
          Copyright © 2023 Foodie Cart <br />{" "}
          <Link href="https://foodie-cart-steel.vercel.app/">
            All rights reserved
          </Link>
        </Text>
      </Container>
    </Body>
  </Html>
);

export default Email;

const main = {
  fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
  backgroundColor: "#ffffff",
};

const table = {
  borderCollapse: "collapse",
  width: "100%",
};
const thTd = {
  padding: "8px",
  border: "1px solid #ddd",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "660px",
  maxWidth: "100%",
};

const tableCell = { display: "table-cell" };

const heading = {
  fontSize: "32px",
  fontWeight: "600",
  color: "#F44322",
};

const cupomText = {
  textAlign: "center",
  margin: "36px 0 10px 0",
  fontSize: "26px",
  fontWeight: "600",
  color: "#111111",
};

const supStyle = {
  fontWeight: "300",
};
const InfoStyle = {
  fontWeight: "600",
  fontSize: "18px",
};

const productPriceTotal = {
  margin: "0",
  color: "rgb(102,102,102)",
  fontSize: "10px",
  fontWeight: "600",
  padding: "0px 30px 0px 0px",
  textAlign: "right",
};

const productPriceLarge = {
  margin: "0px 20px 0px 0px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap",
  textAlign: "right",
};

const productPriceLine = { margin: "30px 0 0 0" };

const productPriceVerticalLine = {
  height: "48px",
  borderLeft: "1px solid",
  borderColor: "rgb(238,238,238)",
};

const productPriceLargeWrapper = { display: "table-cell", width: "90px" };

const footerTextCenter = {
  fontSize: "12px",
  color: "rgb(102,102,102)",
  margin: "20px 0",
  lineHeight: "auto",
  textAlign: "center",
};

const footerIcon = { display: "block", margin: "40px 0 0 0" };

const footerLinksWrapper = {
  margin: "8px 0 0 0",
  textAlign: "center",
  fontSize: "12px",
  color: "rgb(102,102,102)",
};

const footerCopyright = {
  margin: "25px 0 0 0",
  textAlign: "center",
  fontSize: "12px",
  color: "rgb(102,102,102)",
};
