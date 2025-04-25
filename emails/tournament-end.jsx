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

// Helper function to format date
const formatDate = (date) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = new Date(date);
  const dayName = days[d.getDay()];
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${dayName} ${day}/${month}/${year}`;
};

// Helper function to format time
const formatTime = (date) => {
  const d = new Date(date);
  let hours = d.getHours();
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return `${hours}:${minutes}${ampm}`;
};

const MatchResult = ({ team1, team2, score1, score2 }) => (
  <Section style={matchResultContainer}>
    <Row style={{ marginBottom: "15px" }}>
      <Column style={{ width: "40%" }}>
        <Row>
          <Column style={{ width: "50px", verticalAlign: "middle" }}>
            <Img
              src={`${baseUrl}/static/defaultTeam.png`}
              width="50"
              height="50"
              alt={team1}
              style={teamLogo}
            />
          </Column>
          <Column style={{ verticalAlign: "middle" }}>
            <Text style={teamNameText}>{team1}</Text>
          </Column>
        </Row>
      </Column>
      <Column style={{ width: "20%", textAlign: "right" }}>
        <Text style={scoreText}>
          {score1}{" "}
          <Img
            src={`http://media.staging.smartb.au.sydney.digiground.com.au/uploads/1745553945248.png`}
            alt="Arrow Up"
            style={arrowUp}
          />
        </Text>
      </Column>
    </Row>
    <Row>
      <Column style={{ width: "40%" }}>
        <Row>
          <Column style={{ width: "50px", verticalAlign: "middle" }}>
            <Img
              src={`${baseUrl}/static/defaultTeam.png`}
              width="50"
              height="50"
              alt={team2}
              style={teamLogo}
            />
          </Column>
          <Column style={{ verticalAlign: "middle" }}>
            <Text style={teamNameText}>{team2}</Text>
          </Column>
        </Row>
      </Column>
      <Column style={{ width: "20%", textAlign: "right" }}>
        <Text style={scoreText}>
          {score2}{" "}
          <Img
            src={`http://media.staging.smartb.au.sydney.digiground.com.au/uploads/1745553945248.png`}
            alt="Arrow Up"
            style={arrowUpVisibility}
          />
        </Text>
      </Column>
    </Row>
  </Section>
);

const LadderRow = ({
  position,
  userName,
  roundPoints,
  roundMargin,
  overallPoints,
}) => (
  <Row style={ladderRowStyle}>
    <Column style={{ width: "10%", textAlign: "left" }}>
      <Text style={positionText}>{position}</Text>
    </Column>
    <Column style={{ width: "40%" }}>
      <Row>
        <Column style={{ width: "30px" }}>
          <div style={userAvatarStyle}>
            <Img
              src={
                "http://media.staging.smartb.au.sydney.digiground.com.au/uploads/1745408351814.png"
              }
              width="34"
              height="34"
              alt="SmartB"
            />
          </div>
        </Column>
        <Column>
          <Text style={userNameText}>{userName}</Text>
        </Column>
      </Row>
    </Column>
    <Column style={{ width: "16%", textAlign: "center" }}>
      <Text style={pointsText}>{roundPoints}</Text>
    </Column>
    <Column style={{ width: "16%", textAlign: "center" }}>
      <Text style={pointsText}>{roundMargin}</Text>
    </Column>
    <Column style={{ width: "18%", textAlign: "center" }}>
      <Text style={pointsText}>{overallPoints}</Text>
    </Column>
  </Row>
);

const TournamentEndEmail = ({
  name = "Name",
  tournamentName = "[Tournament_Name]",
  sports = "[SPORTS]",
  league = "[LEAGUE]",
  matchDate = new Date(),
  matchTime = new Date(),
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
        We hope this email finds you well. As the {tournamentName} has
        concluded, here are the results for the Final Round.
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
              We hope this email finds you well. As the {tournamentName} has
              concluded, here are the results for the Final Round:
            </Text>
          </Section>

          <section style={matchSection}>
            {/* Match Details Header */}
            <Section style={matchHeaderSection}>
              <Row style={{ marginBottom: "20px" }}>
                <Column style={{ width: "50%" }}>
                  <Text style={sportsText}>{sports}</Text>
                </Column>
                <Column style={{ width: "50%", textAlign: "right" }}>
                  <Text style={leagueText}>{league}</Text>
                </Column>
              </Row>
              <Row>
                <Column style={{ width: "50%" }}>
                  <Text style={dateTimeText}>
                    {formatDate(matchDate)} | {formatTime(matchTime)}
                  </Text>
                </Column>
                <Column style={{ width: "50%", textAlign: "right" }}>
                  <Link href="#" style={viewEventLink}>
                    View event
                  </Link>
                </Column>
              </Row>
            </Section>

            {/* Match Result */}
            <MatchResult
              team1="[Team_1]"
              team2="[Team_2]"
              score1="126"
              score2="106"
            />
          </section>

          {/* Ladder Section */}
          <Section style={ladderSection}>
            <Text style={ladderHeaderText}>
              Please check out the current rankings for Final Round:
            </Text>
            <section style={ladderContainer}>
              {/* Ladder Header */}
              <Row style={ladderHeaderStyle}>
                <Column style={{ width: "10%", textAlign: "left" }}>
                  <Text style={headerText}>#Pos</Text>
                </Column>
                <Column style={{ width: "40%" }}>
                  <Text style={headerText}>Tipster</Text>
                </Column>
                <Column style={{ width: "16%", textAlign: "center" }}>
                  <Text style={headerText}>Round Pts</Text>
                </Column>
                <Column style={{ width: "16%", textAlign: "center" }}>
                  <Text style={headerText}>Round Margin</Text>
                </Column>
                <Column style={{ width: "18%", textAlign: "center" }}>
                  <Text style={headerText}>Overall Pts</Text>
                </Column>
              </Row>

              {/* Ladder Rows */}
              <LadderRow
                position="3"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="1"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="2"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="3"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="4"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="5"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="6"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="7"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="8"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="9"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
              <LadderRow
                position="10"
                userName="[Your name]"
                roundPoints="[X]"
                roundMargin="[X]"
                overallPoints="[X]"
              />
            </section>
          </Section>

          {/* View Complete Ladder Button */}
          <Section style={submitSection}>
            <Button style={submitButton} href="#">
              Click here to see the complete ladder
            </Button>
          </Section>

          {/* Thank You Message */}
          <Section style={section}>
            <Text style={para16}>
              Thank you for being a part of this tournament.
            </Text>
            <Text style={para16}>
              If you have any questions or concerns, feel free to reach out to
              our support team at{" "}
              <Link href="mailto:support@smartb.com.au" style={supportLink}>
                support@smartb.com.au
              </Link>
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
  padding: "0px 12px",
  maxWidth: "600px",
};

const logoSection = {
  textAlign: "center",
  marginTop: "15px",
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

const matchSection = {
  padding: "15px 12px",
  marginBottom: "15px",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
};

// Match Header Styles
const matchHeaderSection = {
  marginBottom: "15px",
};

const sportsText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const leagueText = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const dateTimeText = {
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  color: "#191919",
  margin: "0px",
};

// Match Result Styles
const matchResultContainer = {
  padding: "0px ",
};

const teamLogo = {
  borderRadius: "50%",
  backgroundColor: "#f5f5f5",
};

const teamNameText = {
  fontSize: "16px",
  lineHeight: "21px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
  paddingLeft: "10px",
};

const scoreText = {
  fontSize: "16px",
  lineHeight: "21px",
  fontWeight: "400",
  color: "#191919",
  margin: "0",
};

const arrowUp = {
  display: "inline-block",
  width: "6.59px",
  height: "11.18px",
};

const arrowUpVisibility = {
  display: "inline-block",
  width: "6.59px",
  height: "11.18px",
  visibility: "hidden",
};

const viewEventLink = {
  color: "#4455C7",
  textDecoration: "underline",
  fontSize: "14px",
  lineHeight: "16px",
  fontWeight: "400",
  display: "inline-block",
};

// Ladder Styles
const ladderSection = {
  padding: "0px",
  margin: "20px 0",
};

const ladderHeaderText = {
  fontSize: "22.4px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 20px",
  textAlign: "left",
  padding: "0 0px 8px",
  borderBottom: "1px solid #D4D6D8",
};

const ladderContainer = {
  backgroundColor: "#FFFFFF",
};

const ladderHeaderStyle = {
  backgroundColor: "#FFFFFF",
  padding: "10px",
  borderBottom: "1px solid #D4D6D8",
};

const headerText = {
  fontSize: "14px",
  lineHeight: "19px",
  color: "#003764",
  margin: "0",
  fontWeight: "700",
};

const ladderRowStyle = {
  padding: "10px",
  borderBottom: "1px solid #E8EAEC",
};

const positionText = {
  fontSize: "16px",
  lineHeight: "19px",
  fontWeight: "400",
  color: "#191919",
  margin: "0",
};

const userAvatarStyle = {
  width: "34px",
  height: "34px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const userInitialStyle = {
  color: "#ffffff",
  fontSize: "12px",
  fontWeight: "600",
  margin: "0",
};

const userNameText = {
  fontSize: "16px",
  lineHeight: "19px",
  color: "#191919",
  margin: "0",
  paddingLeft: "10px",
};

const pointsText = {
  fontSize: "16px",
  lineHeight: "19px",
  color: "#191919",
  margin: "0",
};

const supportLink = {
  color: "#4455C7",
  textDecoration: "underline",
};

// Reuse existing styles
const submitSection = {
  textAlign: "center",
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

export default TournamentEndEmail;
