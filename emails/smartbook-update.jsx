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
import sportsData from "./static/data/smartbook-update.json";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

const FixtureRow = ({ match }) => {
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <>
      <Section style={fixtureRowContainer}>
        {/* Home Team Row */}
        <Row style={{ marginBottom: '10px' }}>
          <Column style={{ width: '70%' }}>
            <Row>
              <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                <Img
                  src={match.homeFlag}
                  width="60"
                  height="60"
                  alt={match.homeTeamName}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: 'middle' }}>
                <Text style={teamName}>{match.homeTeamName}</Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: '30%', textAlign: 'right' }}>
            <div style={{ width: '100px', marginLeft: 'auto' }}>
              <div style={{ ...bookmakerLabelColumn, backgroundColor: '#00854D' }}>
                <Img
                  src={match.homeBookKeeperLogo}
                  width="60"
                  height="20"
                  alt="Bookmaker"
                  style={bookmakerLogo}
                />
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>{match.homeCurrentBestOdd}</Text>
              </div>
            </div>
          </Column>
        </Row>

        {/* Away Team Row */}
        <Row>
          <Column style={{ width: '70%' }}>
            <Row>
              <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                <Img
                  src={match.awayFlag}
                  width="60"
                  height="60"
                  alt={match.awayTeamName}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: 'middle' }}>
                <Text style={teamName}>{match.awayTeamName}</Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: '30%', textAlign: 'right' }}>
            <div style={{ width: '100px', marginLeft: 'auto' }}>
              <div style={{ ...bookmakerLabelColumn, backgroundColor: '#0066B2' }}>
                <Img
                  src={match.awayBookKeeperLogo}
                  width="60"
                  height="20"
                  alt="Bookmaker"
                  style={bookmakerLogo}
                />
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>{match.awayCurrentBestOdd}</Text>
              </div>
            </div>
          </Column>
        </Row>
      </Section>

      {/* Featured Odds Sections */}
      <Row style={oddsRowStyle}>
        <Text style={oddsRowLabel}>{match.homeTeamName} - Featured Bookmaker Odds</Text>
      </Row>
      <Row style={allOddsRow}>
        {match.homeOdds.map((odd, index) => (
          <Column key={index} style={{ width: '25%', padding: '0 4px' }}>
            <div style={{ ...bookmakerBox, backgroundColor: '#ffb74d' }}>
              <Img
                src={odd.BookKeeperLogo}
                width="60"
                height="20"
                alt="Bookmaker"
                style={bookmakerLogo}
              />
            </div>
            <div style={oddsBox}>
              <Text style={oddsValue}>{odd.odd}</Text>
            </div>
          </Column>
        ))}
      </Row>

      <Row style={oddsRowStyle}>
        <Text style={oddsRowLabel}>{match.awayTeamName} - Featured Bookmaker Odds</Text>
      </Row>
      <Row style={allOddsRow}>
        {match.awayOdds.map((odd, index) => (
          <Column key={index} style={{ width: '25%', padding: '0 4px' }}>
            <div style={{ ...bookmakerBox, backgroundColor: '#ffb74d' }}>
              <Img
                src={odd.BookKeeperLogo}
                width="60"
                height="20"
                alt="Bookmaker"
                style={bookmakerLogo}
              />
            </div>
            <div style={oddsBox}>
              <Text style={oddsValue}>{odd.odd}</Text>
            </div>
          </Column>
        ))}
      </Row>

      {/* Comment Section */}
      {match.comment && (
        <Row style={commentRow}>
          <Text style={commentText}>
            <strong>Comment:</strong> {match.comment}
          </Text>
        </Row>
      )}
    </>
  );
};

const SmartBookUpdateEmail = ({
  sportData = sportsData.sportData
}) => {
  return (
    <Html>
      <Head />
      <Preview>Your SmartBook Update for {sportData.currentDate}</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={{ textAlign: 'center', marginTop: '15px', marginBottom: '25px' }}>
            <Img
              src={mediaConfig.logos.smartB}
              width="120"
              alt="SmartB"
              style={logo}
            />
          </Section>

          {/* Greeting and Summary */}
          <Section style={section}>
            <Text style={paragraph}>
              Hi {sportData.name},
            </Text>
            <Text style={paragraph}>
              You have {sportData.SmartBook.length} fixtures for {sportData.currentDate}
            </Text>
            <Text style={paragraph}>
              Head to your SmartBook to leave comments or view your upcoming fixtures.
            </Text>
          </Section>

          {/* Action Button */}
          <Section style={buttonSection}>
            <Button style={button} href={sportData.upcomingEventsLink}>
              Go to your Sports SmartBook
            </Button>
          </Section>

          {/* Match Sections */}
          {sportData.SmartBook.map((match, index) => (
            <Section key={index} style={sportSection}>
              <Row style={sportHeader}>
                <Column style={{ width: '70%' }}>
                  <Text style={sportTitle}>{match.sportName.toUpperCase()}</Text>
                </Column>
                <Column style={{ width: '30%', textAlign: 'right' }}>
                  <Text style={sportLabel}>{match.tournamentName}</Text>
                  <Link href={`${sportData.baseUrl}${match.redirectName}`} >
                    View event
                  </Link>
                </Column>
              </Row>
              <Text style={dateHeader}>
                {new Date(match.startTime).toLocaleDateString('en-US', {
                  weekday: 'long',
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })} | {new Date(match.startTime).toLocaleTimeString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </Text>
              <FixtureRow match={match} />
            </Section>
          ))}

          {/* View All Button */}
          <Section style={viewAllSection}>
            <Button style={viewAllButton} href={sportData.upcomingEventsLink}>
              View all upcoming events
            </Button>
          </Section>

          {/* Responsible Gambling Banner */}
          <Section style={gamblingBanner}>
            <Heading style={gamblingHeader}>What are you really gambling with?</Heading>
            <Text style={gamblingText}>
              For free and confidential support call 1800 858 858 or visit{' '}
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
                  alt="SmartPlay"
                  style={{ margin: "0 auto" }}
                />
              </Column>
              <Column>
                <Img
                  src={mediaConfig.logos.smartTippingBlack}
                  width="120"
                  alt="SmartTipping"
                  style={{ margin: "0 auto" }}
                />
              </Column>
              <Column>
                <Img
                  src={mediaConfig.logos.smartOdds}
                  width="120"
                  alt="SmartOdds"
                  style={{ margin: "0 auto" }}
                />
              </Column>
            </Row>
            <Row style={socialLinks}>
              {[
                { name: 'Facebook', url: mediaConfig.social.facebook },
                { name: 'Instagram', url: mediaConfig.social.instagram },
                { name: 'Twitter', url: mediaConfig.social.twitter },
                { name: 'LinkedIn', url: mediaConfig.social.linkedin },
                { name: 'YouTube', url: mediaConfig.social.youtube },
                { name: 'TikTok', url: mediaConfig.social.tiktok },
                { name: 'Vemeo', url: mediaConfig.social.vemeo }
              ].map((platform, i) => (
                <Column key={i} style={socialIconColumn}>
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
              Suite 302, Level 3/2 Elizabeth Plaza, North Sydney, NSW 2060
              <br />
              E: info@smartb.com.au
            </Text>
            <Text style={footerDisclaimer}>
              Don't want to get notifications? <Link href="#" style={footerLink}>Unsubscribe here</Link>
              <br />
              View our updated <Link href="#" style={footerLink}>Privacy Policy</Link>
            </Text>
            <Text style={copyright}>
              Copyright © SmartB Pty Ltd | All rights reserved
            </Text>
            <Row style={appStoreSection}>
              <Column style={{ textAlign: 'center' }}>
                <Link href={mediaConfig.downloadLinks.appStore} style={appStoreButton}>
                  <Img
                    src={mediaConfig.downloadLinks.appStore}
                    width="120"
                    alt="Download on App Store"
                  />
                </Link>
                <Link href={mediaConfig.downloadLinks.googlePlay} style={appStoreButton}>
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
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "0",
  maxWidth: "600px",
  backgroundColor: "#ffffff",
};

const logo = {
  margin: "0 auto",
};

const section = {
  padding: "0 15px",
  margin: "15px 0",
};

const paragraph = {
  fontSize: "14px",
  lineHeight: "20px",
  margin: "0 0 15px",
  color: "#333",
};

const buttonSection = {
  textAlign: "center",
  margin: "25px 0",
};

const button = {
  backgroundColor: "#4455C7",
  color: "#ffffff",
  padding: "12px 24px",
  borderRadius: "4px",
  textDecoration: "none",
  fontWeight: "600",
  fontSize: "14px",
};

const sportSection = {
  padding: "15px",
  margin: "15px 0",
  border: "1px solid #E8EAEC",
  borderRadius: "4px",
};

const sportHeader = {
  marginBottom: "10px",
};

const sportTitle = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#333",
  margin: "0",
};

const sportLabel = {
  fontSize: "14px",
  color: "#666",
  margin: "0",
};

const dateHeader = {
  fontSize: "14px",
  color: "#666",
  margin: "0 0 12px",
  fontWeight: "500",
  borderBottom: "1px solid #E8EAEC",
  paddingBottom: "10px",
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
  fontSize: "14px",
  margin: "0",
  color: "#333",
  fontWeight: "500",
  paddingLeft: "10px",
};

const oddsBox = {
  backgroundColor: "#E8EAEC",
  borderRadius: "4px",
  padding: "6px 4px",
  textAlign: "center",
  minWidth: "50px",
};

const oddsValue = {
  color: "#333",
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
  backgroundColor: "#f9f9f9",
  padding: "15px",
  margin: "20px 0",
  borderRadius: "0",
  color: "#333",
  textAlign: "center",
  borderTop: "1px solid #e0e0e0",
  borderBottom: "1px solid #e0e0e0",
};

const gamblingHeader = {
  fontSize: "16px",
  fontWeight: "600",
  margin: "0 0 5px",
  color: "#333",
};

const gamblingText = {
  fontSize: "14px",
  margin: "0",
};

const gamblingLink = {
  color: "#2196f3",
  textDecoration: "underline",
};

const footer = {
  backgroundColor: "#003764",
  padding: "20px 15px",
  textAlign: "center",
  color: "#ffffff",
  marginTop: "20px",
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
  borderRadius: '4px 4px 0 0',
  padding: '2px 8px',
  width: '100px',
  textAlign: 'center',
};

const bookmakerLabelText = {
  color: '#ffffff',
  fontSize: '10px',
  fontWeight: '600',
  margin: '0',
};

const bookmakerOdds = {
  backgroundColor: '#E8EAEC',
  borderRadius: '0 0 4px 4px',
  padding: '4px 8px',
  width: '100px',
  textAlign: 'center',
};

const mainOddsValueStyle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#333',
  margin: '0',
};

const oddsRowStyle = {
  marginTop: '4px',
  marginBottom: '6px',
  padding: '0 12px',
};

const oddsRowLabel = {
  fontSize: '12px',
  color: '#666',
  margin: '0',
};

const allOddsRow = {
  width: '100%',
  padding: '0 12px',
  marginBottom: '16px',
};

const bookmakerBox = {
  borderRadius: '4px',
  padding: '4px',
  textAlign: 'center',
  marginBottom: '4px',
};

const bookmakerLogo = {
  margin: '0 auto',
  display: 'block',
};

const commentRow = {
  padding: '10px 12px',
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  marginTop: '10px',
};

const commentText = {
  fontSize: '14px',
  color: '#333',
  margin: '0',
  lineHeight: '1.4',
};

export default SmartBookUpdateEmail;
