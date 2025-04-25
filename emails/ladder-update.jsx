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

const UserStatsCard = ({ userName, tipsEntered, roundRank, overallRank }) => (
  <Section style={statsCardContainer}>
    <Text style={userNameStyle}>
      {userName} - Round {roundRank}
    </Text>
    <Row style={statsRow}>
      <Column style={{ width: "33%", textAlign: "center" }}>
        <Text style={statsLabel}>Tips entered</Text>
        <Text style={statsValue}>{tipsEntered}</Text>
      </Column>
      <Column style={{ width: "33%", textAlign: "center" }}>
        <Text style={statsLabel}>Round Rank</Text>
        <Text style={statsValue}>{roundRank}/100</Text>
      </Column>
      <Column style={{ width: "33%", textAlign: "center" }}>
        <Text style={statsLabel}>Overall Rank</Text>
        <Text style={statsValue}>{overallRank}/100</Text>
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
    <Column style={{ width: "10%", textAlign: "center" }}>
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

const LadderUpdateEmail = ({
  name = "Name",
  roundNumber = "3",
  userName = "[User_name]",
  tipsEntered = "9/9",
  roundRank = "3",
  overallRank = "14",
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
        The Round {roundNumber} tipping results are in! Check out where you
        stand in the competition.
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
              The Round {roundNumber} tipping results are in! Check out where
              you stand in the competition.
            </Text>
          </Section>

          {/* User Stats Card */}
          <UserStatsCard
            userName={userName}
            tipsEntered={tipsEntered}
            roundRank={roundRank}
            overallRank={overallRank}
          />

          {/* Ladder Section */}
          <Section style={ladderSection}>
            <Heading style={ladderTitle}>ROUND {roundNumber} - LADDER</Heading>
            <section style={ladderContainer}>
              {/* Ladder Header */}
              <Row style={ladderHeaderStyle}>
                <Column style={{ width: "10%", textAlign: "center" }}>
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
                userName={userName}
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
  padding: "0 15px",
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

// Stats Card Styles
const statsCardContainer = {
  backgroundColor: "#ffffff",
  padding: "15px 0px",
  margin: "0px 0px 20px",
  border: "1px solid #E7E9EC",
  borderRadius: "8px",
};

const userNameStyle = {
  fontSize: "16px",
  lineHeight: "21px",
  fontWeight: "600",
  color: "#191919",
  margin: "0 0 15px",
  textAlign: "center",
};

const statsRow = {
  borderTop: "1px solid #E7E9EC",
  paddingTop: "15px",
};

const statsLabel = {
  fontSize: "16px",
  lineHeight: "19px",
  color: "#191919",
  fontWeight: "400",
  margin: "0 0 5px",
};

const statsValue = {
  fontSize: "22.4px",
  lineHeight: "28.8px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

// Ladder Styles
const ladderSection = {
  margin: "20px 0",
};

const ladderTitle = {
  fontSize: "22.4px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 20px",
  textAlign: "left",
  padding: "0 12px 8px",
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

// Reuse existing styles from smart-tipping.jsx
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

export default LadderUpdateEmail;
