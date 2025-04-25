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
import emailResponseData from "./static/data/blackbook_update.json";
import moment from "moment";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const RunnerRow = ({
  runner,
  startDate,
  number,
  barrierNumber,
  name,
  jockey,
  trainer,
  weight,
  venue,
  odds,
}) => (
  <>
    <Section style={fixtureRowContainer}>
      <Text style={dateHeader}>
        {new Date(startDate).toLocaleDateString("en-US", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}{" "}
        |{" "}
        {new Date(startDate).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })}{" "}
        | 2000m
      </Text>
      {/* Runner Info Row */}
      <Row style={{ marginBottom: "10px" }}>
        <Column style={{ width: "70%" }}>
          <Row>
            <Column style={{ verticalAlign: "middle", textAlign: "left" }}>
              <Link href={runner?.redirectUrl} style={gamblingLink}>
                <Text style={runnerName}>
                  {number}. {name} ({barrierNumber}){" "}
                  <Img
                    src={mediaConfig?.logos?.bookIcon}
                    width="19"
                    height="19"
                    alt="Book Icon"
                    style={{
                      verticalAlign: "middle",
                      marginLeft: "4px",
                      display: "inline-block",
                      marginBottom: "2px",
                    }}
                  />
                </Text>
              </Link>
              <Row style={{ verticalAlign: "baseline" }}>
                <Column style={{ width: "50%", textAlign: "left" }}>
                  <Text style={runnerDetails}>
                    <b>J: </b>
                    {jockey}
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
            </Column>
          </Row>
        </Column>
        <Column style={{ width: "30%", textAlign: "right" }}>
          <div style={{ width: "100px", marginLeft: "auto" }}>
            <div style={bookmakerLabelColumn}>
              <Text style={bookmakerLabelText}>
                {runner?.MaxIntValue?.bookmaker || "BOOKMAKER"}
              </Text>
            </div>
            <div style={bookmakerOdds}>
              <Text style={mainOddsValueStyle}>
                {runner?.MaxIntValue?.value || "5.00"}
              </Text>
            </div>
          </div>
        </Column>
      </Row>
    </Section>

    {/* Venue Info */}
    <Link href={runner?.redirectUrl}>
      <Row style={venueStyle}>
        <Column style={{ width: "calc(100% - 27px)" }}>
          <Text style={venueText}>{venue}</Text>
        </Column>
        <Column style={{ width: "27px", textAlign: "right" }}>
          <Text style={arrowText}>
            <Img
              src={mediaConfig?.logos?.rightArrow}
              width="27"
              height="21"
              alt="Right Arrow"
            />
          </Text>
        </Column>
      </Row>
    </Link>

    {/* Featured Odds Section */}
    <Row style={oddsRowStyle}>
      <Text style={oddsRowLabel}>Featured Bookmaker Odds</Text>
    </Row>
    <Row style={allOddsRow}>
      {runner?.RaceOdds?.map((odd, index) => (
        <Column style={{ width: "25%", padding: "0 4px" }} key={index}>
          <div
            style={{
              ...bookmakerBox,
              backgroundColor: odd?.logo_bg,
              color: odd?.logo_text,
            }}
          >
            <Text style={bookmakerName}>{odd.bookmaker}</Text>
          </div>
          <div style={oddsBox}>
            <Text style={oddsValue}>{odd.value}</Text>
          </div>
        </Column>
      ))}
    </Row>
    {runner?.comment && (
      <Row style={oddsRowStyle}>
        <Text style={oddsRowComment}>{runner?.comment}</Text>
      </Row>
    )}
  </>
);

const RacingBlackbookEmail = ({ emailResponse = {} }) => {
  const {
    name = "Name",
    currentData = "Saturday, February 1, 2025",
    BlackBook = [],
    upcomingEventsLink = "#",
  } = emailResponseData;
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Preview>
        You have <b>{BlackBook.length} runners</b> for <b>{currentData}</b>
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
              src={mediaConfig.logos.smartB}
              width="150"
              height="100%"
              alt="SmartTipping"
              style={logo}
            />
          </Section>

          {/* Greeting */}
          <Section style={section}>
            <Text style={para16}>Hi {name},</Text>
            <Text style={para16}>
              You have <b>{BlackBook.length} runners</b> for{" "}
              <b>{currentData}</b>. <br /> Head to your BlackBook to leave
              comments, or view your upcoming runners.
            </Text>
          </Section>

          {/* Action Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href={upcomingEventsLink}>
              Go to your Racing BlackBook
            </Button>
          </Section>

          {/* Runners Section */}
          <Section style={runnersSection}>
            {BlackBook.map((runner = {}, index) => (
              <Section
                key={index}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  border: "1px solid #E8EAEC",
                  padding: "17px 13px",
                  marginBottom: "20px",
                }}
              >
                <RunnerRow
                  runner={runner}
                  startDate={runner.startDate || "2025-04-15T04:15:00.000Z"}
                  number={runner.runnerNumber || "1"}
                  barrierNumber={runner.barrierNumber || "1"}
                  name={runner.runnerName || "Runner Name"}
                  jockey={runner.JockeyName || "Jockey Name"}
                  trainer={runner.TrainerName || "Trainer Name"}
                  weight={`${runner.jockeyWeight || "58"}Kg`}
                  venue={`R${runner.raceNumber || "1"} ${runner.TrackName || "Track Name"}`}
                  odds={{
                    betfair: runner.RaceOdds?.[0]?.betfair || "2.00",
                    tab: runner.RaceOdds?.[0]?.tab || "4.50",
                    bookmaker: runner.RaceOdds?.[0]?.bookmaker || "6.90",
                    ladbrokes: runner.RaceOdds?.[0]?.ladbrokes || "5.00",
                    mainOddsValue: runner.MaxIntValue?.value || "5.00",
                    bookmakerLabel:
                      runner.MaxIntValue?.bookmaker || "BOOKMAKER",
                  }}
                />
              </Section>
            ))}
          </Section>

          {/* View All Button */}
          <Section style={{ ...submitSection, textAlign: "center" }}>
            <Button style={submitButton} href={upcomingEventsLink}>
              View all upcoming events
            </Button>
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
            <Row style={footerBrands}>
              <Column>
                <Img
                  src={mediaConfig.logos.smartPlay}
                  width="120"
                  height="35px"
                  alt="SmartPlay"
                  style={{ margin: "0 auto" }}
                />
              </Column>
              <Column>
                <Img
                  src={mediaConfig.logos.smartTippingWhite}
                  width="120"
                  height="35px"
                  alt="SmartTipping"
                  style={{ margin: "0 auto" }}
                />
              </Column>
              <Column>
                <Img
                  src={mediaConfig.logos.smartOdds}
                  width="120"
                  height="35px"
                  alt="SmartOdds"
                  style={{ margin: "0 auto" }}
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
  padding: "0",
  maxWidth: "600px",
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

const runnersSection = {
  padding: "0 12px",
  margin: "15px 0",
};

const fixtureRowContainer = {
  backgroundColor: "#ffffff",
  marginBottom: "5px",
};

const dateHeader = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 12px",
  fontWeight: "500",
};

const runnerNumber = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const runnerName = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#4455C7",
  margin: "0 0 4px 0",
  textAlign: "left",
};

const runnerDetails = {
  fontSize: "14px",
  lineHeight: "16px",
  color: "#191919",
  margin: "0 0 4px 0",
  textAlign: "left",
};

const venueStyle = {
  padding: "8px 12px",
  marginBottom: "4px",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  cursor: "pointer",
  border: "1px solid #e0e0e0",
};

const venueText = {
  fontSize: "16px",
  color: "#191919",
  lineHeight: "22.4px",
  margin: "0",
  fontWeight: "600",
};

const arrowText = {
  fontSize: "18px",
  color: "#3665f9",
  margin: "0",
  fontWeight: "bold",
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
  fontSize: "10px",
  fontWeight: "600",
  margin: "0",
};

const bookmakerOdds = {
  backgroundColor: "#e6e6e6",
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

const oddsRowStyle = {
  marginTop: "4px",
  marginBottom: "6px",
  padding: "0 12px",
};

const oddsRowLabel = {
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "22.4px",
  color: "#191919",
  margin: "0",
  textAlign: "left",
  padding: "18px 0 9px",
};

const oddsRowComment = {
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "22.4px",
  color: "#191919",
  margin: "0",
};

const allOddsRow = {
  width: "100%",
  marginBottom: "16px",
};

const bookmakerBox = {
  borderRadius: "4px",
  padding: "4px",
  textAlign: "center",
  marginBottom: "4px",
};

const bookmakerName = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "700",
  margin: "0",
  textTransform: "uppercase",
};

const oddsBox = {
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
  padding: "6px 4px",
  textAlign: "center",
  minWidth: "50px",
};

const oddsValue = {
  color: "#191919",
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
};

const submitSection = {
  textAlign: "left",
  margin: "25px 0",
  padding: "0 15px",
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

const viewAllButton = {
  ...submitButton,
  backgroundColor: "#4455C7",
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
  padding: "20px 15px",
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
  display: "inline-block",
};

const socialIcon = {
  display: "inline-block",
  verticalAlign: "middle",
  width: "24px",
  height: "24px",
};

const footerText = {
  fontSize: "11.42px",
  lineHeight: "14px",
  margin: "10px 0",
  color: "#E7E9EC",
};

const footerDisclaimer = {
  fontSize: "11.42px",
  lineHeight: "14px",
  color: "#ffffff",
  margin: "5px 0",
};

const footerLink = {
  color: "#ffffff",
  textDecoration: "underline",
};

const copyright = {
  fontSize: "11.42px",
  lineHeight: "14px",
  color: "#ffffff",
  margin: "15px 0",
};

const appStoreSection = {
  margin: "15px 0 0",
  textAlign: "center",
  fontSize: 0,
};

const appStoreButton = {
  display: "inline-block",
  margin: "0 2px",
  verticalAlign: "middle",
};

export default RacingBlackbookEmail;
