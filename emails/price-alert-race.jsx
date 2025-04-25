import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import { mediaConfig } from "./static/constant/config";

const RunnerRow = ({
  runnerName,
  number,
  jockey,
  trainer,
  weight,
  bookmaker = "BET365",
  triggerPrice,
  currentPrice,
}) => (
  <Section>
    {[1].map((item, index) => (
      <Row
        style={
          index === [1].length - 1
            ? runnerDetailsContainerLast
            : runnerDetailsContainer
        }
      >
        {/* Runner Info */}
        <Text style={runnerNumberText}>
          {number}. {runnerName} ({number})
        </Text>
        <Row style={{ marginBottom: "8px" }}>
          <Column style={{ width: "50%", textAlign: "left" }}>
            <Text style={runnerDetails}>
              <b>J:</b> {jockey}
            </Text>
          </Column>
          <Column style={{ width: "50%", textAlign: "left" }}>
            <Text style={runnerDetails}>
              <b>W:</b> {weight}
            </Text>
          </Column>
        </Row>
        <Text style={runnerDetails}>
          <b>T:</b> {trainer}
        </Text>

        <Row style={{ marginTop: "12px", marginBottom: "12px" }}>
          <Column style={bookmakerColumn}>
            <div style={bookmakerLabelColumn}>
              <Text style={bookmakerLabelText}>{bookmaker}</Text>
            </div>
            <Text style={fixedPStyle}>Fixed P</Text>
          </Column>
          <Column style={priceItemColumn}>
            <div style={priceBox}>
              <Text style={priceText}>{currentPrice}</Text>
            </div>
          </Column>
        </Row>
        <Row style={{ marginTop: "12px", marginBottom: "12px" }}>
          <Column style={bookmakerColumn}>
            <div style={bookmakerLabelColumn}>
              <Text style={bookmakerLabelText}>{bookmaker}</Text>
            </div>
            <Text style={fixedPStyle}>Fixed P</Text>
          </Column>
          <Column style={priceItemColumn}>
            <div style={priceBox}>
              <Text style={priceText}>{currentPrice}</Text>
            </div>
          </Column>
        </Row>
        <Row style={{ marginTop: "12px", marginBottom: "12px" }}>
          <Column style={bookmakerColumn}>
            <div style={bookmakerLabelColumn}>
              <Text style={bookmakerLabelText}>{bookmaker}</Text>
            </div>
            <Text style={fixedPStyle}>Fixed P</Text>
          </Column>
          <Column style={priceItemColumn}>
            <div style={priceBox}>
              <Text style={priceText}>{currentPrice}</Text>
            </div>
          </Column>
        </Row>
      </Row>
    ))}
  </Section>
);

const PriceAlertEmail = ({
  name = "[Name]",
  raceName = "CANTERBURY R2",
  location = "Australia / New South Wales / Canterbury",
}) => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Preview>
        There is a price alert for the upcoming event from your watchlist.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section
            style={{
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "25px",
            }}
          >
            <Img
              src={mediaConfig.logos.smartOdds}
              width="120"
              alt="SmartOdds"
              style={logo}
            />
          </Section>

          {/* Greeting */}
          <Section style={section}>
            <Text style={para16}>Hi {name},</Text>
            <Text style={para16}>
              There is a price alert for the upcoming event from your watchlist.
            </Text>
            <Text style={para16}>Here are the details:</Text>
          </Section>

          {/* Race Title */}
          <Section style={raceTitleSection}>
            <Heading style={raceTitle}>{raceName}</Heading>
            <Text style={locationText}>{location}</Text>
          </Section>

          {/* Runner Details */}
          <Section style={runnerRowContainer}>
            <RunnerRow
              runnerName="Incredible Pinto"
              number="1"
              jockey="Peta Edwards"
              trainer="B P Newnham"
              weight="58.00Kg"
              bookmaker="BET365"
              triggerPrice="2.00"
              currentPrice="1.30"
            />
          </Section>

          {/* Action Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href="#">
              Compare Odds at Smart Odds Comparison
            </Button>
          </Section>

          {/* Banner */}
          <Section style={bannerSection}>
            <Img
              src={mediaConfig.banners.smartOdds}
              width="100%"
              alt="Master the Odds"
              style={bannerImage}
            />
          </Section>

          {/* Responsible Gambling Banner */}
          <Section style={gamblingBanner}>
            <Heading style={gamblingHeader}>
              What are you really gambling with?
            </Heading>
            <Text style={gamblingText}>
              For free and confidential support call 1800 858 858 or visit{" "}
              <Link href="https://gamblinghelp.online" style={gamblingLink}>
                Gambling Help Online
              </Link>
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Img
              src={mediaConfig.logos.smartBWhite}
              width="120"
              alt="SmartB"
              style={footerLogo}
            />
            <Row
              style={{
                ...footerBrands,
              }}
            >
              <Column
                style={{
                  padding: "0 5px",
                }}
              >
                <Img
                  src={mediaConfig.logos.smartPlay}
                  width="120"
                  height="35px"
                  alt="SmartPlay"
                  style={{
                    display: "block",
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                    margin: "0 auto",
                    maxWidth: "100%",
                    height: "30px",
                  }}
                />
              </Column>
              <Column
                style={{
                  padding: "0 5px",
                }}
              >
                <Img
                  src={mediaConfig.logos.smartTippingWhite}
                  width="120"
                  height="35px"
                  alt="SmartTipping"
                  style={{
                    display: "block",
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                    margin: "0 auto",
                    maxWidth: "100%",
                    height: "30px",
                  }}
                />
              </Column>
              <Column
                style={{
                  padding: "0 5px",
                }}
              >
                <Img
                  src={mediaConfig.logos.smartOdds}
                  width="120"
                  height="35px"
                  alt="SmartOdds"
                  style={{
                    display: "block",
                    outline: "none",
                    border: "none",
                    textDecoration: "none",
                    margin: "0 auto",
                    maxWidth: "100%",
                    height: "30px",
                  }}
                />
              </Column>
            </Row>
            <Row style={socialLinks}>
              {[
                {
                  name: "Facebook",
                  icon: "fb.png",
                  url: mediaConfig.social.facebook,
                },
                {
                  name: "Instagram",
                  icon: "ig.png",
                  url: mediaConfig.social.instagram,
                },
                {
                  name: "Twitter",
                  icon: "twitter.png",
                  url: mediaConfig.social.twitter,
                },
                {
                  name: "LinkedIn",
                  icon: "linkedin.png",
                  url: mediaConfig.social.linkedin,
                },
                {
                  name: "YouTube",
                  icon: "youtube.png",
                  url: mediaConfig.social.youtube,
                },
                {
                  name: "TikTok",
                  icon: "tiktok.png",
                  url: mediaConfig.social.tiktok,
                },
                {
                  name: "Vemeo",
                  icon: "vemeo.png",
                  url: mediaConfig.social.vemeo,
                },
              ].map((platform, i) => (
                <Column
                  key={i}
                  style={{ ...socialIconColumn, padding: "0 10px" }}
                >
                  <Link href={platform.url} style={socialLink}>
                    <Img
                      src={platform.url}
                      width="24"
                      alt={platform.name}
                      style={socialIcon}
                    />
                  </Link>
                </Column>
              ))}
            </Row>
            <Text style={footerText}>
              SmartB Head Office
              <br />
              Suite 302, Level 3/2 Elizabeth Plaza, North Sydney, NSW 2060
            </Text>
            <Text style={footerText}>
              Send an Email To
              <br />
              <Link
                href="mailto:info@smartb.com.au"
                style={{
                  ...footerLink,
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                E: info@smartb.com.au
              </Link>
            </Text>
            <Text style={footerDisclaimer}>
              Don't want to get notifications?{" "}
              <Link href="#" style={footerLink}>
                Unsubscribe here
              </Link>
              <br />
              View our updated{" "}
              <Link href="#" style={footerLink}>
                Privacy Policy
              </Link>
            </Text>
            <Text style={copyright}>Copyright © SmartB Pty Ltd 2022</Text>
            <Row style={appStoreSection}>
              <Column style={{ textAlign: "center" }}>
                <Link href="https://apps.apple.com" style={appStoreButton}>
                  <Img
                    src={mediaConfig.downloadLinks.appStore}
                    width="120"
                    alt="Download on App Store"
                  />
                </Link>
                <Link href="https://play.google.com" style={appStoreButton}>
                  <Img
                    src={mediaConfig.downloadLinks.googlePlay}
                    width="120"
                    alt="Get it on Google Play"
                  />
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

// Styles
const main = {
  backgroundColor: "#f5f8fa",
  fontFamily: "Roboto, Arial, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
};

const logoSection = {
  textAlign: "center",
  marginBottom: "25px",
};

const logo = {
  margin: "0 auto",
};

const section = {
  padding: "0 12px",
  margin: "15px 0",
};

const para16 = {
  fontSize: "16px",
  lineHeight: "22.4px",
  margin: "0 0 15px",
  color: "#191919",
};

const raceTitleSection = {
  padding: "0 12px",
  marginBottom: "20px",
};

const raceTitle = {
  fontSize: "22.4px",
  lineHeight: "31.36px",
  fontWeight: "700",
  color: "#4455C7",
  margin: "0 0 9px",
  textDecoration: "underline",
};

const locationText = {
  fontSize: "12px",
  lineHeight: "14px",
  color: "#5D5D5D",
  fontWeight: "400",
  margin: "0",
  borderBottom: "1px solid #D4D6D8",
  paddingBottom: "8px",
};

const runnerRowContainer = {
  backgroundColor: "#ffffff",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #E8EAEC",
  marginBottom: "10px",
};

const runnerDetailsContainer = {
  borderBottom: "1px solid #E8EAEC",
  paddingBottom: "15px",
  marginBottom: "15px",
};

const runnerDetailsContainerLast = {
  borderBottom: "none",
  paddingBottom: "0",
  marginBottom: "0",
};

const runnerNumberText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "600",
  color: "#191919",
  margin: "0 0 12px",
};

const runnerDetails = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#191919",
  margin: "0 0 3px",
};

const priceContainer = {
  marginTop: "15px",
};

const bookmakerColumn = {
  width: "calc(100% - 120px)",
};

const bookmakerLabelColumn = {
  backgroundColor: "#027B5B",
  borderRadius: "4px",
  padding: "8px 36px",
  textAlign: "center",
  display: "inline-block",
  marginRight: "12px",
};

const bookmakerLabelText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "16px ",
  fontWeight: "400",
  margin: "0",
};

const fixedPStyle = {
  fontSize: "16px",
  lineHeight: "19px",
  color: "#191919",
  margin: "4px 0 0",
  display: "inline-block",
};

const priceItemColumn = {
  width: "120px",
  textAlign: "center",
};

const priceBox = {
  backgroundColor: "#E7E9EC",
  borderRadius: "5px",
  padding: "8px",
  textAlign: "center",
};

const priceText = {
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: "600",
  color: "#191919",
  margin: "0",
};

const submitSection = {
  textAlign: "center",
  margin: "30px 0 0",
  padding: "0",
};

const submitButton = {
  backgroundColor: "#4455C7",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "19px",
};

const bannerSection = {
  margin: "20px 0",
};

const bannerImage = {
  width: "100%",
  display: "block",
  borderRadius: "4px",
};

const gamblingBanner = {
  backgroundColor: "#FFFFFF",
  padding: "15px",
  borderRadius: "0",
  color: "#191919",
  textAlign: "center",
};

const gamblingHeader = {
  fontSize: "18px",
  lineHeight: "25.2px",
  fontWeight: "600",
  margin: "0 0 5px",
  color: "#191919",
};

const gamblingText = {
  fontSize: "18px",
  lineHeight: "25.2px",
  margin: "0",
  color: "#191919",
};

const gamblingLink = {
  color: "#4455C7",
  textDecoration: "underline",
};

const footer = {
  backgroundColor: "#003764",
  padding: "20px 12px",
  textAlign: "center",
  color: "#ffffff",
};

const footerLogo = {
  margin: "0 auto 15px",
};

const footerBrands = {
  marginBottom: "15px",
};

const socialLinks = {
  margin: "15px 0",
  textAlign: "center",
};

const socialIconColumn = {
  padding: "0 5px",
  display: "inline-block",
};

const socialLink = {
  textDecoration: "none",
};

const socialIcon = {
  width: "24px",
  height: "24px",
};

const footerText = {
  fontSize: "12px",
  margin: "10px 0",
  lineHeight: "1.5",
  color: "#ffffff",
};

const footerLink = {
  color: "#ffffff",
  textDecoration: "underline",
};

const footerDisclaimer = {
  fontSize: "11px",
  color: "#cccccc",
  margin: "10px 0",
};

const copyright = {
  fontSize: "11px",
  color: "#cccccc",
  margin: "15px 0",
};

const appStoreSection = {
  margin: "15px 0 0",
  textAlign: "center",
};

const appStoreButton = {
  display: "inline-block",
  margin: "0 5px",
};

export default PriceAlertEmail;
