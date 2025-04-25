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

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const NewsItem = ({ title, imageUrl, link }) => (
  <Column style={newsItemColumn}>
    <Link href={link} style={newsLink}>
      <Img
        src={imageUrl}
        width="280"
        height="160"
        alt={title}
        style={newsImage}
      />
      <Text style={newsTitle}>{title}</Text>
      <Text style={newsTime}>3 hours ago</Text>
      <Text style={readMore}>Read more</Text>
    </Link>
  </Column>
);

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

const DailySportsUpdateEmail = ({
  name = "Name",
  date = "Saturday, February 1",
  year = "2025",
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
        Here's your daily update on Australian Rules for today, {date}, {year}
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
              Here's your daily update on <b>Australian Rules </b>for today,{" "}
              <b>
                {date}, {year}
              </b>
            </Text>
          </Section>

          {/* Latest News Section */}
          <Section style={section}>
            <Heading style={sectionHeader}>LATEST NEWS</Heading>
            <Row>
              <NewsItem
                title="No one can stop the unstoppable Melbourne! The decade has compounded Melbourne's Christmas loss"
                imageUrl={`http://media.staging.smartb.au.sydney.digiground.com.au/uploads/1745560148274.png`}
                link="#"
              />
              <NewsItem
                title="No one can stop the unstoppable Melbourne! The decade has compounded Melbourne's Christmas loss"
                imageUrl={`http://media.staging.smartb.au.sydney.digiground.com.au/uploads/1745560187012.png`}
                link="#"
              />
            </Row>

            {/* Submit Button */}
            <Section style={{ ...submitSection, textAlign: "left" }}>
              <Button style={submitButton} href="#">
                Click here to see all news
              </Button>
            </Section>
          </Section>
          <Section style={section}>
            {[1, 2, 3].map((fixture) => (
              <Section style={fixtureSection} key={fixture}>
                <Row style={sportHeader}>
                  <Column style={{ width: "50%" }}>
                    <Text style={sportTitle}>Australian Rules</Text>
                  </Column>
                  <Column style={{ width: "50%", textAlign: "right" }}>
                    <Text style={sportTitle}>AFL</Text>
                  </Column>
                </Row>
                <Row style={{ ...sportHeader, marginBottom: "10px" }}>
                  <Column style={{ width: "calc(100% - 70px)" }}>
                    <Text style={sportLabel}>Friday 01/02/2025 | 07:50PM</Text>
                  </Column>
                  <Column style={{ width: "70px", textAlign: "right" }}>
                    <Link href={`# `} style={viewEvent}>
                      View event
                    </Link>
                  </Column>
                </Row>
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
          </Section>

          {/* Submit Button */}
          <Section style={{ ...submitSection, textAlign: "left" }}>
            <Button style={submitButton} href="#">
              Click here to see all upcoming fixtures
            </Button>
          </Section>

          <Section style={section}>
            {/* Latest Results Section */}
            {[1, 2, 3].map((result) => (
              <section style={matchSection}>
                {/* Match Details Header */}
                <Section style={matchHeaderSection}>
                  <Row style={{ marginBottom: "20px" }}>
                    <Column style={{ width: "50%" }}>
                      <Text style={sportsText}>[Sports]</Text>
                    </Column>
                    <Column style={{ width: "50%", textAlign: "right" }}>
                      <Text style={leagueText}>[League]</Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ width: "50%" }}>
                      <Text style={dateTimeText}>
                        {/* {formatDate(matchDate)} | {formatTime(matchTime)} */}
                        Friday 01/02/2025 | 07:50PM
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
            ))}
          </Section>
          {/* Submit Button */}
          <Section style={{ ...submitSection, textAlign: "left" }}>
            <Button style={submitButton} href="#">
              Click here to see all results
            </Button>
          </Section>

          {/* Expert Tips Section */}
          <Section
            style={{ ...section, marginTop: "15px", marginBottom: "0px" }}
          >
            <Heading style={sectionHeader}>EXPERT TIPS</Heading>
            {[1, 2].map((tip) => (
              <Section style={tipSection}>
                <Section style={matchHeaderSection}>
                  <Row style={{ marginBottom: "20px" }}>
                    <Column style={{ width: "50%" }}>
                      <Text style={sportsText}>[Sports]</Text>
                    </Column>
                    <Column style={{ width: "50%", textAlign: "right" }}>
                      <Text style={leagueText}>[League]</Text>
                    </Column>
                  </Row>
                  <Row>
                    <Column style={{ width: "50%" }}>
                      <Text style={dateTimeText}>
                        {/* {formatDate(matchDate)} | {formatTime(matchTime)} */}
                        Friday 01/02/2025 | 07:50PM
                      </Text>
                    </Column>
                  </Row>
                </Section>
                <Row style={tipRow}>
                  <Column style={{ width: "calc(100% - 120px)" }}>
                    <Text style={tipTitle}>Expert Tips for Round 11</Text>
                  </Column>
                  <Column style={{ width: "120px" }}>
                    <Button style={checkTipsButton} href="#">
                      Check Tips
                    </Button>
                  </Column>
                </Row>
              </Section>
            ))}
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

const sectionHeader = {
  fontSize: "22.4px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 20px",
  textAlign: "left",
  padding: "0 0px 8px",
  borderBottom: "1px solid #D4D6D8",
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

const newsItemColumn = {
  width: "50%",
  padding: "0 8px",
};

const newsLink = {
  textDecoration: "none",
  color: "inherit",
};

const newsImage = {
  width: "100%",
  height: "auto",
  borderRadius: "4px",
  marginBottom: "8px",
};

const newsTitle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0 0 8px",
};

const newsTime = {
  fontSize: "14px",
  lineHeight: "16px",
  color: "#5D5D5D",
  margin: "0 0 8px",
};

const readMore = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#4455C7",
  margin: "0",
  textDecoration: "underline",
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

const viewAllSection = {
  textAlign: "center",
  margin: "20px 0",
};

const viewAllButton = {
  backgroundColor: "#666",
  color: "#ffffff",
  padding: "10px 20px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
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

const sportHeader = {
  marginBottom: "20px",
};

const sportTitle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "600",
  color: "#191919",
  margin: "0",
  textTransform: "uppercase",
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

const tipSection = {
  padding: "12px",
  backgroundColor: "#FFFFFF",
  borderRadius: "8px",
  marginBottom: "15px",
};

const tipRow = {
  padding: "0px",
};

const tipTitle = {
  fontSize: "16px",
  lineHeight: "22.4px",
  fontWeight: "700",
  color: "#191919",
  margin: "0",
};

const checkTipsButton = {
  backgroundColor: "#4455C7",
  color: "#ffffff",
  padding: "11px 0px 9px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "16px",
  lineHeight: "19px",
  width: "100%",
  fontWeight: "400",
  textAlign: "center",
  fontFamily: "Roboto, Arial, sans-serif",
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

export default DailySportsUpdateEmail;
