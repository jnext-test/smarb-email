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
                <Column style={{ width: "70%" }}>
                    <Row>
                        <Column style={{ width: "60px", verticalAlign: "middle" }}>
                            <Img
                                src={`${baseUrl}/static/defaultTeam.png`}
                                width="60"
                                height="60"
                                alt={teams.home}
                                style={teamLogo}
                            />
                        </Column>
                        <Column style={{ verticalAlign: "middle" }}>
                            <Text style={teamName}>{teams.home}</Text>
                        </Column>
                    </Row>
                </Column>
                <Column style={{ width: "30%", textAlign: "right" }}>
                    <div style={{ width: "100px", marginLeft: "auto" }}>
                        <div style={bookmakerLabelColumn}>
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
                <Column style={{ width: "70%" }}>
                    <Row>
                        <Column style={{ width: "60px", verticalAlign: "middle" }}>
                            <Img
                                src={`${baseUrl}/static/defaultTeam.png`}
                                width="60"
                                height="60"
                                alt={teams.away}
                                style={teamLogo}
                            />
                        </Column>
                        <Column style={{ verticalAlign: "middle" }}>
                            <Text style={teamName}>{teams.away}</Text>
                        </Column>
                    </Row>
                </Column>
                <Column style={{ width: "30%", textAlign: "right" }}>
                    <div style={{ width: "100px", marginLeft: "auto" }}>
                        <div style={bookmakerLabelColumn}>
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
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap",
                        format: "woff2",
                    }}
                    fontWeight={400}
                    fontStyle="normal"
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
                            src={mediaConfig.logos.smartTipping}
                            width="150"
                            height="30"
                            alt="SmartTipping"
                            style={logo}
                        />
                    </Section>

                    {/* Greeting */}
                    <Section style={section}>
                        <Text style={paragraph}>Hi {name},</Text>
                        <Text style={paragraph}>
                            {" "}
                            <span style={{ fontWeight: "bold" }}>Round {roundNumber}</span> of
                            the <span style={{ fontWeight: "bold" }}>AFL</span> starts at{" "}
                            <span style={{ fontWeight: "bold" }}>
                                7:50 pm AEST this Saturday, February 1st!
                            </span>{" "}
                            Don't forget to get your tips in before the game begins.{" "}
                        </Text>
                        <Text style={paragraph}>Good luck!</Text>
                    </Section>

                    {/* Round Header */}
                    <Section style={roundHeader}>
                        <Heading style={h2}>ROUND {roundNumber} - FIXTURES</Heading>
                    </Section>

                    {/* Friday Fixtures */}
                    <Section style={fixtureSection}>
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

                    {/* Saturday Fixtures */}
                    <Section style={fixtureSection}>
                        <Text style={dateHeader}>Saturday 02/02/2025 | 07:50PM</Text>
                        <FixtureRow
                            teams={{
                                home: "[Team_1]",
                                away: "[Team_2]",
                            }}
                            odds={{
                                home: {
                                    betfair: "2.10",
                                    tab: "3.20",
                                    bookmaker: "1.80",
                                    ladbrokes: "1.58",
                                },
                                away: {
                                    betfair: "2.10",
                                    tab: "3.20",
                                    bookmaker: "1.80",
                                    ladbrokes: "1.58",
                                },
                            }}
                        />
                    </Section>

                    {/* Sunday Fixtures */}
                    <Section style={fixtureSection}>
                        <Text style={dateHeader}>Sunday 03/02/2025 | 07:50PM</Text>
                        <FixtureRow
                            teams={{
                                home: "[Team_1]",
                                away: "[Team_2]",
                            }}
                            odds={{
                                home: {
                                    betfair: "2.10",
                                    tab: "3.20",
                                    bookmaker: "1.80",
                                    ladbrokes: "1.58",
                                },
                                away: {
                                    betfair: "2.10",
                                    tab: "3.20",
                                    bookmaker: "1.80",
                                    ladbrokes: "1.58",
                                },
                            }}
                        />
                    </Section>

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
                        <Text style={paragraph}>
                            Kind regards,
                            <br />
                            SmartB Team
                        </Text>
                    </Section>

                    {/* Banner Image */}
                    <Section style={bannerSection}>
                        <Img
                            src={`${baseUrl}/static/master-odds-banner.png`}
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
                                    src={mediaConfig.logos.smartTipping}
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
                                { name: "Facebook", icon: mediaConfig.social.facebook },
                                { name: "Instagram", icon: mediaConfig.social.instagram },
                                { name: "Twitter", icon: mediaConfig.social.twitter },
                                { name: "LinkedIn", icon: mediaConfig.social.linkedin },
                                { name: "YouTube", icon: mediaConfig.social.youtube },
                                { name: "TikTok", icon: mediaConfig.social.tiktok },
                                { name: "Vemeo", icon: mediaConfig.social.vemeo },
                            ].map((platform, i) => (
                                <Column key={i} style={socialIconColumn}>
                                    <Link href="#" style={socialLink}>
                                        <Img
                                            src={platform.icon}
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
                        </Text>

                        <Text>
                            Send an Email To
                            <br />
                            <Link href="mailto:info@smartb.com.au" style={footerLink}>
                                info@smartb.com.au
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
                        <Text style={copyright}>
                            Copyright © SmartB Pty Ltd | All rights reserved
                        </Text>
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
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
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

const roundHeader = {
    backgroundColor: "#f5f5f5",
    padding: "10px 15px",
    margin: "10px 0",
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
};

const h2 = {
    fontSize: "16px",
    fontWeight: "700",
    margin: "0",
    color: "#333",
};

const fixtureSection = {
    padding: "10px 15px",
    margin: "15px 0",
    border: "1px solid #E8EAEC",
    borderRadius: "4px",
};

const dateHeader = {
    fontSize: "16px",
    color: "#191919",
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
    backgroundColor: "#444",
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

const bookmakerLabelColumn = {
    backgroundColor: "#2f6e35",
    borderRadius: "4px 4px 0 0",
    padding: "2px 8px",
    width: "100px",
    textAlign: "center",
};

const bookmakerLabelText = {
    color: "#ffffff",
    fontSize: "10px",
    fontWeight: "600",
    margin: "0",
};

const bookmakerOdds = {
    backgroundColor: "#e6e6e6",
    borderRadius: "0 0 4px 4px",
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
    fontSize: "12px",
    color: "#666",
    margin: "0",
};

const allOddsRow = {
    width: "100%",
    padding: "0 12px",
    marginBottom: "16px",
};

const oddsBox = {
    backgroundColor: "#f5f5f5",
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

const submitSection = {
    textAlign: "center",
    margin: "25px 0",
};

const submitButton = {
    backgroundColor: "#4455C7",
    color: "#ffffff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
};

const reminderSection = {
    padding: "15px",
    backgroundColor: "#f9f9f9",
    margin: "20px 0",
    borderRadius: "0",
    borderTop: "1px solid #e0e0e0",
    borderBottom: "1px solid #e0e0e0",
};

const reminderText = {
    fontSize: "14px",
    color: "#666",
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
};

const socialIconColumn = {
    padding: "0 5px",
    display: "inline-block",
};

const socialLink = {
    textDecoration: "none",
    display: "inline-block",
    lineHeight: 0,
};

const socialIcon = {
    display: "inline-block",
    verticalAlign: "middle",
    width: "24px",
    height: "24px",
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

const mainOddsValueStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    margin: "0",
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

export default SmartTippingEmail; 