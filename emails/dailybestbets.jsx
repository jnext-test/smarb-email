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
import emailResponseData from "./static/data/dailybestbets.json";

const BetRow = ({
  raceName,
  raceNumber,
  raceComment,
  analyst,
  date,
  time,
  distance,
  runner,
  odds,
  bet,
}) => (
  <>
    <Section style={betRowContainer}>
      <Text style={raceTitle}>
        {raceName} (Race {raceNumber})
      </Text>

      <Text style={commentStyle}>{raceComment.replace(/<[^>]*>/g, "")}</Text>

      <Text style={analystStyle}>
        Analyst:{" "}
        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>
          {analyst}
        </span>
      </Text>
      <hr style={{ border: "1px solid #D4D6D8" }} />

      <Section style={fixtureRowContainer}>
        <Text style={dateHeader}>
          {date} | {time} | {distance}
        </Text>
        {/* Runner Info Row */}
        <Row style={{ marginBottom: "10px" }}>
          <Column style={{ width: "70%" }}>
            <Row>
              <Column style={{ verticalAlign: "middle", textAlign: "left" }}>
                <Link href={runner?.redirectUrl} style={gamblingLink}>
                  <Text style={runnerName}>
                    {bet?.betParticipant?.runnerNumber}.{" "}
                    {bet?.betParticipant?.animal?.name} (
                    {bet?.betParticipant?.barrierNumber}){" "}
                    {/* <Img
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
                    /> */}
                  </Text>
                </Link>
                <Row style={{ verticalAlign: "baseline" }}>
                  <Column style={{ width: "50%", textAlign: "left" }}>
                    <Text style={runnerDetails}>
                      <b>J: </b>
                      {bet?.betParticipant?.Jockey?.name}
                    </Text>
                  </Column>
                  <Column style={{ width: "50%", textAlign: "left" }}>
                    <Text style={runnerDetails}>
                      <b>W:</b> {bet?.betParticipant?.JockeyWeight}
                    </Text>
                  </Column>
                </Row>
                <Text style={runnerDetails}>
                  <b>T:</b> {bet?.betParticipant?.Trainer?.name}
                </Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: "30%", textAlign: "right" }}>
            <div style={{ width: "100px", marginLeft: "auto" }}>
              <div style={bookmakerLabelColumn}>
                <Text style={bookmakerLabelText}>
                  {bet?.MaxIntValue?.bookmaker || "BOOKMAKER"}
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
            <Text
              style={venueText}
            >{`R${bet?.betRace?.raceNumber || "1"} ${bet?.Event?.trackName || "Track Name"}`}</Text>
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
        {bet?.allOdds?.map((odd, index) => (
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
              <Text style={oddsValue}>{odd.intValue}</Text>
            </div>
          </Column>
        ))}
      </Row>
    </Section>
  </>
);

const DailyBestBetsEmail = () => {
  const {
    firstName = "Name",
    subjectDate = "Saturday, February 1, 2025",
    betData = [],
  } = emailResponseData;

  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        />
      </Head>
      <Preview>Your Daily Best Bets for {subjectDate} are right here!</Preview>
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
            <Text style={para16}>Hi {firstName},</Text>
            <Text style={para16}>
              Your Daily Best Bets for {subjectDate} are right here!
            </Text>
          </Section>

          {/* Daily Best Bets Section */}
          <Section style={betsSection}>
            <Heading style={sectionTitle}>SMARTB DAILY BEST BETS</Heading>

            {betData.map((bet, index) => (
              <BetRow
                key={index}
                raceName={bet.betRace?.raceName}
                raceNumber={bet.betRace?.raceNumber}
                raceComment={bet.keyComment}
                analyst={bet.User?.firstName + " " + bet.User?.lastName}
                date={
                  bet.betRace?.startDate
                    ? new Date(bet.betRace.startDate).toLocaleDateString(
                        "en-AU",
                        {
                          weekday: "long",
                          day: "numeric",
                          month: "numeric",
                          year: "numeric",
                        }
                      )
                    : "N/A"
                }
                time={
                  bet.betRace?.startDate
                    ? new Date(bet.betRace.startDate).toLocaleTimeString()
                    : "N/A"
                }
                distance={
                  bet.betRace?.distance ? `${bet.betRace.distance}m` : "N/A"
                }
                runner={{
                  number: bet.betParticipant?.runnerNumber,
                  name: bet.betParticipant?.animal?.name,
                  jockey: bet.betParticipant?.Jockey?.name,
                  trainer: bet.betParticipant?.Trainer?.name,
                  venue: bet.Event?.trackName,
                }}
                odds={{
                  bet365: bet.maxOdd,
                  betfair: "2.00",
                  tab: "4.50",
                  boombet: "6.90",
                  ladbrokes: "5.00",
                }}
                bet={bet}
              />
            ))}
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

const sectionTitle = {
  fontSize: "22.4px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 20px",
  textAlign: "left",
  padding: "0 12px 8px",
  borderBottom: "1px solid #D4D6D8",
};

const betsSection = {
  margin: "20px 0",
};

const betRowContainer = {
  backgroundColor: "#ffffff",
  margin: "0px 0px 20px",
  padding: "15px",
  borderRadius: "8px",
  border: "1px solid #E8EAEC",
};

const raceTitle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0px 0px 20px 0px",
};

const commentStyle = {
  fontSize: "16px",
  color: "#191919",
  margin: "0px 0px 20px 0px",
  lineHeight: "22.4px",
};

const analystStyle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  color: "#191919",
  fontWeight: "400",
  margin: "0px 0px 20px 0px",
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

export default DailyBestBetsEmail;
