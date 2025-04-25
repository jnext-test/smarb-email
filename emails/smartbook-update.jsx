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
import sportsData from "./static/data/smartbook-update.json";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const FixtureRow = ({ match }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <>
      <Section style={fixtureRowContainer}>
        {/* Home Team Row */}
        <Row style={{ marginBottom: "10px" }}>
          <Column style={{ width: "calc(100% - 120px)" }}>
            <Row>
              <Column style={{ width: "60px", verticalAlign: "middle" }}>
                <Img
                  src={match.homeFlag}
                  width="60"
                  height="60"
                  alt={match.homeTeamName}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: "middle" }}>
                <Text style={teamName}>
                  {match.homeTeamName}{" "}
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
              </Column>
            </Row>
          </Column>
          <Column style={{ width: "120px" }}>
            <div style={{ width: "120px" }}>
              <div
                style={{ ...bookmakerLabelColumn, backgroundColor: "#00854D" }}
              >
                <Img
                  src={match.homeBookKeeperLogo}
                  width="60"
                  height="20"
                  alt="Bookmaker"
                  style={bookmakerLogo}
                />
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>
                  {match.homeCurrentBestOdd}
                </Text>
              </div>
            </div>
          </Column>
        </Row>

        {/* Away Team Row */}
        <Row>
          <Column style={{ width: "calc(100% - 120px)" }}>
            <Row>
              <Column style={{ width: "60px", verticalAlign: "middle" }}>
                <Img
                  src={match.awayFlag}
                  width="60"
                  height="60"
                  alt={match.awayTeamName}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: "middle" }}>
                <Text style={teamName}>{match.awayTeamName}</Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: "120px" }}>
            <div style={{ width: "120px" }}>
              <div
                style={{ ...bookmakerLabelColumn, backgroundColor: "#0066B2" }}
              >
                <Img
                  src={match.awayBookKeeperLogo}
                  width="60"
                  height="20"
                  alt="Bookmaker"
                  style={bookmakerLogo}
                />
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>
                  {match.awayCurrentBestOdd}
                </Text>
              </div>
            </div>
          </Column>
        </Row>
      </Section>
      {/* Featured Odds Sections */}
      <Row style={oddsRowStyle}>
        <Text style={oddsRowLabel}>
          {match.homeTeamName} - Featured Bookmaker Odds
        </Text>
      </Row>
      <Row style={allOddsRow}>
        {match.homeOdds.map((odd, index) => (
          <Column key={index} style={{ width: "25%", padding: "0 4px" }}>
            <div
              style={{
                ...bookmakerBox,
                backgroundColor: odd?.logo_bg,
                color: odd?.logo_text,
              }}
            >
              <Text style={bookmakerName}>{odd.BookKeeperName}</Text>
            </div>
            <div style={oddsBox}>
              <Text style={oddsValue}>{odd.odd}</Text>
            </div>
          </Column>
        ))}
      </Row>
      <Row style={oddsRowStyle}>
        <Text style={oddsRowLabel}>
          {match.awayTeamName} - Featured Bookmaker Odds
        </Text>
      </Row>
      <Row style={allOddsRow}>
        {match.awayOdds.map((odd, index) => (
          <Column key={index} style={{ width: "25%", padding: "0 4px" }}>
            <div
              style={{
                ...bookmakerBox,
                backgroundColor: odd?.logo_bg,
                color: odd?.logo_text,
              }}
            >
              <Text style={bookmakerName}>{odd.BookKeeperName}</Text>
            </div>
            <div style={oddsBox}>
              <Text style={oddsValue}>{odd.odd}</Text>
            </div>
          </Column>
        ))}
      </Row>

      {match.comment && (
        <Row>
          <Text style={commentText}>
            <strong>Comment:</strong> {match.comment}
          </Text>
        </Row>
      )}
    </>
  );
};

const SmartBookUpdateEmail = ({ sportData = sportsData.sportData }) => {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>

      <Preview>Your SmartBook Update for {sportData.currentDate}</Preview>
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
            <Text style={para16}>Hi {sportData.name},</Text>
            <Text style={para16}>
              You have <b>{sportData.SmartBook.length} fixtures</b> for{" "}
              <b>{sportData.currentDate}</b>. <br /> Head to your SmartBook to
              leave comments, or view your upcoming fixtures.
            </Text>
          </Section>

          {/* Action Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href={sportData.upcomingEventsLink}>
              Go to your Sports SmartBook
            </Button>
          </Section>

          {/* Match Sections */}
          <Section style={sportSection}>
            {sportData.SmartBook.map((match, index) => (
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
                <Row style={sportHeader}>
                  <Column style={{ width: "50%" }}>
                    <Text style={sportTitle}>
                      {match.sportName.toUpperCase()}
                    </Text>
                  </Column>
                  <Column style={{ width: "50%", textAlign: "right" }}>
                    <Text style={sportTitle}>{match.tournamentName}</Text>
                  </Column>
                </Row>
                <Row style={{ ...sportHeader, marginBottom: "10px" }}>
                  <Column style={{ width: "calc(100% - 70px)" }}>
                    <Text style={sportLabel}>
                      {new Date(match.startTime).toLocaleDateString("en-US", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}{" "}
                      |{" "}
                      {new Date(match.startTime).toLocaleTimeString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </Text>
                  </Column>
                  <Column style={{ width: "70px", textAlign: "right" }}>
                    <Link
                      href={`${sportData.baseUrl}${match.redirectName} `}
                      style={viewEvent}
                    >
                      View event
                    </Link>
                  </Column>
                </Row>

                <FixtureRow match={match} />
              </Section>
            ))}
          </Section>
          {/* View All Button */}

          <Section style={{ ...submitSection, textAlign: "center" }}>
            <Button style={submitButton} href={sportData.upcomingEventsLink}>
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
  margin: "0px auto",
  padding: "0px",
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

const paragraph = {
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 15px",
  color: "#191919",
};

const submitSection = {
  textAlign: "left",
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

const sportSection = {
  padding: "0px 12px",
  margin: "15px 0",
};

const sportHeader = {
  marginBottom: "20px",
};

const sportTitle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "600",
  color: "#191919",
  margin: "0",
};

const sportLabel = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#5D5D5D",
  margin: "0",
};

const viewEvent = {
  fontSize: "14px",
  lineHeight: "20px",
  color: "#4455C7",
  margin: "0",
  textDecoration: "underline",
};

const fixtureRowContainer = {
  backgroundColor: "#ffffff",
  padding: "8px 12px",
  marginBottom: "5px",
};

const teamLogo = {
  borderRadius: "50%",
  width: "60px",
  height: "60px",
};

const teamName = {
  fontSize: "16px",
  lineHeight: "22.4px",
  margin: "0",
  color: "#191919",
  fontWeight: "500",
  paddingLeft: "10px",
};
const bookmakerName = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "700",
  margin: "0",
  textTransform: "uppercase",
};

const oddsBox = {
  backgroundColor: "#E8EAEC",
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

const viewAllSection = {
  textAlign: "center",
  margin: "25px 0",
};

const viewAllButton = {
  backgroundColor: "#4455C7",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
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
  fontSize: 0,
};

const socialIconColumn = {
  padding: "0 1px",
  display: "inline-block",
  verticalAlign: "middle",
};

const socialLink = {
  textDecoration: "none",
  display: "block",
  lineHeight: 0,
};

const socialIcon = {
  width: "18px",
  height: "18px",
};

const footerText = {
  fontSize: "12px",
  margin: "10px 0",
  color: "#ffffff",
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
  fontSize: 0,
};

const appStoreButton = {
  display: "inline-block",
  margin: "0 2px",
  verticalAlign: "middle",
};

const bookmakerLabelColumn = {
  borderRadius: "4px",
  padding: "2px 8px",
  width: "100px",
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
  backgroundColor: "#E8EAEC",
  borderRadius: "4px",
  padding: "4px 8px",
  width: "100px",
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
  lineHeight: "22.4px",
  color: "#191919",
  fontWeight: "500",
  margin: "0",
};

const allOddsRow = {
  width: "100%",
  padding: "0 12px",
  marginBottom: "16px",
};

const bookmakerBox = {
  borderRadius: "4px",
  padding: "4px",
  textAlign: "center",
  marginBottom: "4px",
};

const bookmakerLogo = {
  margin: "0 auto",
  display: "block",
};

const commentRow = {
  padding: "10px 12px",
  backgroundColor: "#f5f5f5",
  borderRadius: "4px",
  marginTop: "10px",
};

const commentText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  color: "#191919",
  margin: "0",
};

export default SmartBookUpdateEmail;
