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

const RaceRow = ({
  raceName,
  raceNumber,
  barrierNumber,
  runner,
  odds,
  venue,
  redirectUrl,
}) => (
  <>
    <Section style={raceRowContainer}>
      {/* Runner Details */}
      {/* mapping this row for each runner */}
      {[1, 2, 3, 4]?.map((item, index) => (
        /* Runner Info Row */
        <Row
          style={
            index === [1, 2, 3, 4].length - 1
              ? runnerDetailsContainerLast
              : runnerDetailsContainer
          }
          key={index}
        >
          <Column style={{ width: "70%" }}>
            <Row>
              <Column style={{ verticalAlign: "middle", textAlign: "left" }}>
                <Text style={raceNumberText}>
                  {raceNumber}. {raceName} ({barrierNumber}){" "}
                </Text>

                <Row style={{ verticalAlign: "baseline" }}>
                  <Column style={{ width: "50%", textAlign: "left" }}>
                    <Text style={runnerDetails}>
                      <b>J: </b>
                      {runner.jockey}
                    </Text>
                  </Column>
                  <Column style={{ width: "50%", textAlign: "left" }}>
                    <Text style={runnerDetails}>
                      <b>W:</b> {runner.weight}
                    </Text>
                  </Column>
                </Row>
                <Text style={runnerDetails}>
                  <b>T:</b> {runner.trainer}
                </Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: "30%", textAlign: "right" }}>
            <div style={{ width: "100px", marginLeft: "auto" }}>
              <div style={bookmakerLabelColumn}>
                <Text style={bookmakerLabelText}>{"BOOKMAKER"}</Text>
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>{"5.00"}</Text>
              </div>
            </div>
          </Column>
        </Row>
      ))}
    </Section>
  </>
);

const RaceAlertEmail = ({
  name = "Name",
  raceName = "CANTERBURY R2",
  location = "Australia / New South Wales / Canterbury",
  startTime = "2 minutes",
}) => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Preview>Your selected race is about to begin in {startTime}!</Preview>
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
              src={mediaConfig.logos.smartB}
              width="120"
              alt="SmartB"
              style={logo}
            />
          </Section>

          {/* Greeting */}
          <Section style={section}>
            <Text style={para16}>Hi {name},</Text>
            <Text style={para16}>
              Your selected race is about to begin in {startTime}!
            </Text>
            <Text style={para16}>Here are the details:</Text>
          </Section>

          {/* Race Title */}
          <Section style={raceTitleSection}>
            <Heading style={raceTitle}>{raceName}</Heading>
            <Text style={locationText}>{location}</Text>
          </Section>

          {/* Race Details */}
          <RaceRow
            raceName="Race 2"
            raceNumber="1"
            barrierNumber="1"
            runner={{
              jockey: "Peta Edwards",
              trainer: "B P Newnham",
              weight: "58.00Kg",
            }}
            odds={{
              bet365: "6.00",
              betfair: "6.00",
              tab: "6.00",
              boombet: "6.00",
              ladbrokes: "6.00",
            }}
            venue="Canterbury"
            redirectUrl="#"
          />

          {/* Action Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href={"#"}>
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
              <br />
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

const para14 = {
  fontSize: "14px",
  lineHeight: "16px",
  margin: "0 0 15px",
  color: "#191919",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 15px",
  color: "#333",
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

const raceRowContainer = {
  backgroundColor: "#ffffff",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #E8EAEC",
};

const raceNumberText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "600",
  color: "#191919",
  margin: "0px 0px 9px",
};

const runnerDetailsContainer = {
  marginBottom: "10px",
  paddingBottom: "19px",
  borderBottom: "1px solid #E8EAEC",
};

const runnerDetailsContainerLast = {
  marginBottom: "0px",
  paddingBottom: "0px",
  borderBottom: "none",
};

const runnerDetails = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#191919",
  margin: "0 0 3px",
};

const oddsContainer = {
  width: "100px",
  marginLeft: "auto",
};

const bookmakerLabel = {
  backgroundColor: "#2f6e35",
  borderRadius: "4px 4px 0 0",
  padding: "2px 8px",
  textAlign: "center",
};

const bookmakerLabelColumn = {
  backgroundColor: "#2f6e35",
  borderRadius: "4px",
  padding: "2px 8px",
  minWidth: "80px",
  textAlign: "center",
  marginBottom: "4px",
};

const bookmakerLabelText = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
};

const bookmakerOdds = {
  backgroundColor: "#D6D9F3",
  borderRadius: "4px",
  padding: "4px 8px",
  minWidth: "80px",
  textAlign: "center",
};

const mainOddsValueStyle = {
  fontSize: "14px",
  fontWeight: "600",
  color: "#191919",
  margin: "0",
};

const compareButtonSection = {
  textAlign: "center",
  marginTop: "15px",
};

const compareButton = {
  backgroundColor: "#4455C7",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "4px",
  textDecoration: "none",
  fontSize: "14px",
  fontWeight: "600",
  display: "inline-block",
};

const bannerSection = {
  margin: "20px 0px",
};

const bannerImage = {
  width: "100%",
  display: "block",
  borderRadius: "4px",
};

const submitSection = {
  textAlign: "center",
  margin: "30px 0px 0px",
  padding: "0px",
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
  fontFamily: "Arial, sans-serif",
};

const gamblingText = {
  fontSize: "18px",
  lineHeight: "25.2px",
  margin: "0",
  color: "#191919",
  fontFamily: "Arial, sans-serif",
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
};

const footerDisclaimer = {
  fontSize: "11px",
  color: "#cccccc",
  margin: "10px 0",
};

const footerLink = {
  color: "#cccccc",
  textDecoration: "underline",
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

export default RaceAlertEmail;
