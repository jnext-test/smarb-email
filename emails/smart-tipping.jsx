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
  Font,
} from "@react-email/components";
import * as React from "react";
import { mediaConfig } from "./static/constant/config";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const FixtureRow = ({ teams, odds }) => (
  <>
    <Section style={fixtureRowContainer}>
      {/* Home Team Row */}
      <Row style={{ marginBottom: "10px" }}>
        <Column style={{ width: "calc(100% - 120px)" }}>
          <Row>
            <Column style={{ width: "50px", verticalAlign: "middle" }}>
              <Img
                src={`${baseUrl}/static/defaultTeam.png`}
                width="50"
                height="50"
                alt={teams.home}
                style={teamLogo}
              />
            </Column>
            <Column style={{ verticalAlign: "middle" }}>
              <Text style={teamName}>{teams.home}</Text>
            </Column>
          </Row>
        </Column>
        <Column style={{ width: "120px" }}>
          <div style={{ width: "120px" }}>
            <div
              style={{ ...bookmakerLabelColumn, backgroundColor: "#00854D" }}
            >
              <Text style={bookmakerLabelText}>
                {odds.home.bookmakerLabel || "BOOKMAKER"}
              </Text>
            </div>
            <div style={bookmakerOdds}>
              <Text style={mainOddsValueStyle}>
                {odds.home.mainOddsValue || "5.00"}
              </Text>
            </div>
          </div>
        </Column>
      </Row>

      {/* Away Team Row */}
      <Row>
        <Column style={{ width: "calc(100% - 120px)" }}>
          <Row>
            <Column style={{ width: "50px", verticalAlign: "middle" }}>
              <Img
                src={`${baseUrl}/static/defaultTeam.png`}
                width="50"
                height="50"
                alt={teams.away}
                style={teamLogo}
              />
            </Column>
            <Column style={{ verticalAlign: "middle" }}>
              <Text style={teamName}>{teams.away}</Text>
            </Column>
          </Row>
        </Column>
        <Column style={{ width: "120px" }}>
          <div style={{ width: "120px" }}>
            <div
              style={{ ...bookmakerLabelColumn, backgroundColor: "#00854D" }}
            >
              <Text style={bookmakerLabelText}>
                {odds.away.bookmakerLabel || "BOOKMAKER"}
              </Text>
            </div>
            <div style={bookmakerOdds}>
              <Text style={mainOddsValueStyle}>
                {odds.away.mainOddsValue || "5.00"}
              </Text>
            </div>
          </div>
        </Column>
      </Row>
    </Section>

    {/* Featured Odds Sections */}
    <Row style={oddsRowStyle}>
      <Text style={oddsRowLabel}>{teams.home} - Featured Bookmaker Odds</Text>
    </Row>
    <Row style={allOddsRow}>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#ffb74d" }}>
          <Text style={bookmakerName}>BETFAIR</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.betfair}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#4caf50" }}>
          <Text style={bookmakerName}>TAB</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.tab}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#ff4d4d" }}>
          <Text style={bookmakerName}>BOOKIE</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.bookmaker}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#2196f3" }}>
          <Text style={bookmakerName}>LADBROKES</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.ladbrokes}</Text>
        </div>
      </Column>
    </Row>

    <Row style={oddsRowStyle}>
      <Text style={oddsRowLabel}>{teams.away} - Featured Bookmaker Odds</Text>
    </Row>
    <Row style={allOddsRow}>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#ffb74d" }}>
          <Text style={bookmakerName}>BETFAIR</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.betfair}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#4caf50" }}>
          <Text style={bookmakerName}>TAB</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.tab}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#ff4d4d" }}>
          <Text style={bookmakerName}>BOOKIE</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.bookmaker}</Text>
        </div>
      </Column>
      <Column style={{ width: "25%", padding: "0 4px" }}>
        <div style={{ ...bookmakerBox, backgroundColor: "#2196f3" }}>
          <Text style={bookmakerName}>LADBROKES</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.ladbrokes}</Text>
        </div>
      </Column>
    </Row>
  </>
);

const SmartTippingEmail = ({
  name = "Name",
  roundNumber = "3",
  startDate = "Saturday, February 1st",
  startTime = "07:50 PM",
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
        Round {roundNumber} of the AFL starts at {startTime} AEST {startDate}
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
              src={mediaConfig.logos.smartTippingBlack}
              width="150"
              height="30"
              alt="SmartTipping"
              style={logo}
            />
          </Section>

          {/* Greeting */}
          <Section style={section}>
            <Text style={para16}>Hi {name},</Text>
            <Text style={para16}>
              {" "}
              <span style={{ fontWeight: "bold" }}>Round {roundNumber}</span> of
              the <span style={{ fontWeight: "bold" }}>AFL</span> starts at{" "}
              <span style={{ fontWeight: "bold" }}>
                7:50 pm AEST this Saturday, February 1st!
              </span>{" "}
              Don't forget to get your tips in before the game begins.{" "}
            </Text>
            <Text style={para16}>Good luck!</Text>
          </Section>

          {/* Round Header */}
          <Section style={roundHeader}>
            <Heading style={h2}>ROUND {roundNumber} - FIXTURES</Heading>
          </Section>

          {/* Friday Fixtures */}
          {[1, 2, 3].map((fixture) => (
            <Section style={fixtureSection} key={fixture}>
              <Text style={dateHeader}>Friday 01/02/2025 | 07:50PM</Text>
              <FixtureRow
                teams={{
                  home: "Brisbane Lions",
                  away: "Melbourne Demons",
                }}
                odds={{
                  home: {
                    betfair: "2.00",
                    tab: "4.50",
                    bookmaker: "6.90",
                    ladbrokes: "5.00",
                  },
                  away: {
                    betfair: "2.00",
                    tab: "4.50",
                    bookmaker: "6.90",
                    ladbrokes: "5.00",
                  },
                }}
              />
            </Section>
          ))}

          {/* Submit Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href="#">
              Click here to Submit your Tips
            </Button>
          </Section>

          {/* Reminder Text */}
          <Section style={reminderSection}>
            <Text style={reminderText}>
              Please remember that the closing time for tipping in the first
              game of{" "}
              <span style={{ fontWeight: "bold" }}>
                Round {roundNumber} is Saturday, February 1 at 07:50 PM
              </span>
            </Text>
            <Text style={para16}>
              Kind regards,
              <br />
              SmartB Team
            </Text>
          </Section>

          {/* Banner Image */}
          <Section style={bannerSection}>
            <Img
              src={mediaConfig.banners.smartOdds}
              width="100%"
              alt="Master Odds Banner"
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
  padding: "0px 12px",
  maxWidth: "600px",
};

const logo = {
  margin: "0 auto",
};

const section = {
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

const roundHeader = {
  margin: "10px 0",
};

const h2 = {
  fontSize: "22.4px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 20px",
  textAlign: "left",
  padding: "0 0px 8px",
  borderBottom: "1px solid #D4D6D8",
};

const fixtureSection = {
  padding: "10px 12px",
  margin: "15px 0",
  backgroundColor: "#fff",
  borderRadius: "8px",
  border: "1px solid #E8EAEC",
  padding: "17px 13px",
  marginBottom: "20px",
};

const dateHeader = {
  fontSize: "16px",
  color: "#191919",
  margin: "0 0 12px",
  fontWeight: "700",
  borderBottom: "1px solid #E7E9EC",
  paddingBottom: "10px",
};

const fixtureRowContainer = {
  backgroundColor: "#ffffff",
  padding: "8px 0px",
  marginBottom: "5px",
};

const teamLogo = {
  borderRadius: "50%",
  backgroundColor: "#444",
  width: "50px",
  height: "50px",
};

const teamName = {
  fontSize: "16px",
  lineHeight: "22.4px",
  margin: "0",
  color: "#191919",
  fontWeight: "700",
  paddingLeft: "10px",
};

const bookmakerLabelColumn = {
  borderRadius: "4px",
  padding: "8px 8px",
  width: "100px",
  textAlign: "center",
  marginBottom: "4px",
};

const bookmakerLabelText = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  margin: "0",
};

const bookmakerOdds = {
  backgroundColor: "#D6D9F3",
  borderRadius: "4px",
  padding: "4px 8px",
  width: "100px",
  textAlign: "center",
};

const oddsRowStyle = {
  marginTop: "4px",
  marginBottom: "6px",
  padding: "0 12px",
};

const oddsRowLabel = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const allOddsRow = {
  width: "100%",
  padding: "0px",
  marginBottom: "16px",
};

const oddsBox = {
  backgroundColor: "#E7E9EC",
  borderRadius: "4px",
  padding: "7px 5px",
  textAlign: "center",
  minWidth: "50px",
};

const oddsValue = {
  color: "#191919",
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "400",
  margin: "0",
};

const submitSection = {
  textAlign: "center",
  margin: "25px 0",
  padding: "0 12px",
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

const reminderSection = {
  padding: "0px",
  backgroundColor: "#f9f9f9",
  margin: "20px 0",
  borderRadius: "0",
};

const reminderText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  color: "#191919",
  letterSpacing: "0px",
  margin: "0 0 15px",
};

const bannerSection = {
  margin: "20px 0",
};

const bannerImage = {
  width: "100%",
  display: "block",
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

const mainOddsValueStyle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const bookmakerBox = {
  borderRadius: "4px",
  padding: "8px 8px",
  textAlign: "center",
  marginBottom: "4px",
};

const bookmakerName = {
  color: "#ffffff",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  margin: "0",
  textTransform: "uppercase",
};

export default SmartTippingEmail;
