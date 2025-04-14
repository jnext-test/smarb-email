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

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const RunnerRow = ({
    number,
    name,
    jockey,
    trainer,
    weight,
    venue,
    odds,
}) => (
    <>
        <Section style={fixtureRowContainer}>
            {/* Runner Info Row */}
            <Row style={{ marginBottom: "10px" }}>
                <Column style={{ width: "70%" }}>
                    <Row>
                        <Column style={{ width: "60px", verticalAlign: "middle" }}>
                            <Text style={runnerNumber}>{number}.</Text>
                        </Column>
                        <Column style={{ verticalAlign: "middle", textAlign: "left" }}>
                            <Text style={runnerName}>{name}</Text>
                            <Row style={{ verticalAlign: "baseline" }}>
                                <Column style={{ width: "50%", textAlign: "left" }}>
                                    <Text style={runnerDetails}>J: {jockey}</Text>
                                </Column>
                                <Column style={{ width: "50%", textAlign: "left" }}>
                                    <Text style={runnerDetails}>W: {weight}</Text>
                                </Column>
                            </Row>
                            <Text style={runnerDetails}>T: {trainer}</Text>
                        </Column>
                    </Row>
                </Column>
                <Column style={{ width: "30%", textAlign: "right" }}>
                    <div style={{ width: "100px", marginLeft: "auto" }}>
                        <div style={bookmakerLabelColumn}>
                            <Text style={bookmakerLabelText}>
                                {odds.bookmakerLabel || "BOOKMAKER"}
                            </Text>
                        </div>
                        <div style={bookmakerOdds}>
                            <Text style={mainOddsValueStyle}>
                                {odds.mainOddsValue || "5.00"}
                            </Text>
                        </div>
                    </div>
                </Column>
            </Row>
        </Section>

        {/* Venue Info */}
        <Row style={venueStyle}>
            <Column style={{ width: "90%" }}>
                <Text style={venueText}>{venue}</Text>
            </Column>
            <Column style={{ width: "10%", textAlign: "right" }}>
                <Text style={arrowText}>→</Text>
            </Column>
        </Row>

        {/* Featured Odds Section */}
        <Row style={oddsRowStyle}>
            <Text style={oddsRowLabel}>{name} - Featured Bookmaker Odds</Text>
        </Row>
        <Row style={allOddsRow}>
            <Column style={{ width: "25%", padding: "0 4px" }}>
                <div style={{ ...bookmakerBox, backgroundColor: "#ffb74d" }}>
                    <Text style={bookmakerName}>BETFAIR</Text>
                </div>
                <div style={oddsBox}>
                    <Text style={oddsValue}>{odds.betfair}</Text>
                </div>
            </Column>
            <Column style={{ width: "25%", padding: "0 4px" }}>
                <div style={{ ...bookmakerBox, backgroundColor: "#4caf50" }}>
                    <Text style={bookmakerName}>TAB</Text>
                </div>
                <div style={oddsBox}>
                    <Text style={oddsValue}>{odds.tab}</Text>
                </div>
            </Column>
            <Column style={{ width: "25%", padding: "0 4px" }}>
                <div style={{ ...bookmakerBox, backgroundColor: "#ff4d4d" }}>
                    <Text style={bookmakerName}>BOOKIE</Text>
                </div>
                <div style={oddsBox}>
                    <Text style={oddsValue}>{odds.bookmaker}</Text>
                </div>
            </Column>
            <Column style={{ width: "25%", padding: "0 4px" }}>
                <div style={{ ...bookmakerBox, backgroundColor: "#2196f3" }}>
                    <Text style={bookmakerName}>LADBROKES</Text>
                </div>
                <div style={oddsBox}>
                    <Text style={oddsValue}>{odds.ladbrokes}</Text>
                </div>
            </Column>
        </Row>
    </>
);

const RacingBlackbookEmail = ({
    name = "Name",
    runnersCount = "3",
    raceDate = "Saturday, February 1, 2025",
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
                You have {runnersCount} runners for {raceDate}
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
                            src={`${baseUrl}/static/smarttipping-logo.png`}
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
                            You have {runnersCount} runners for {raceDate}. Head to your
                            BlackBook to leave comments, or view your upcoming runners.
                        </Text>
                    </Section>

                    {/* Action Button */}
                    <Section style={submitSection}>
                        <Button style={submitButton} href="#">
                            Go to your Racing BlackBook
                        </Button>
                    </Section>

                    {/* Runners Section */}
                    <Section style={runnersSection}>
                        <Section
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #E8EAEC",
                                padding: "17px 13px",
                                marginBottom: "20px",
                            }}
                        >
                            <RunnerRow
                                number="1"
                                name="Incredible Pinto"
                                jockey="Peta Edwards"
                                trainer="B P Newnham"
                                weight="58.00Kg"
                                venue="R4 Mornington"
                                odds={{
                                    betfair: "2.00",
                                    tab: "4.50",
                                    bookmaker: "6.90",
                                    ladbrokes: "5.00",
                                    mainOddsValue: "6.00",
                                    bookmakerLabel: "BET365",
                                }}
                            />
                        </Section>

                        <Section
                            style={{
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                border: "1px solid #E8EAEC",
                                padding: "17px 13px",
                            }}
                        >
                            <RunnerRow
                                number="6"
                                name="Our Kobison"
                                jockey="[Jockey_name]"
                                trainer="[Trainer_name]"
                                weight="58.00Kg"
                                venue="R4 Mornington"
                                odds={{
                                    betfair: "2.10",
                                    tab: "3.20",
                                    bookmaker: "1.80",
                                    ladbrokes: "1.58",
                                    mainOddsValue: "5.00",
                                    bookmakerLabel: "BOOKMAKER",
                                }}
                            />
                        </Section>
                    </Section>

                    {/* View All Button */}
                    <Section style={submitSection}>
                        <Button style={viewAllButton} href="#">
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
                            <Link href="https://gamblinghelp.online" style={gamblingLink}>
                                Gambling Help Online
                            </Link>
                        </Text>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Img
                            src={`${baseUrl}/static/smartb-footer-logo.png`}
                            width="120"
                            alt="SmartB"
                            style={footerLogo}
                        />
                        <Row style={footerBrands}>
                            <Column>
                                <Img
                                    src={`${baseUrl}/static/smart-play-footer-logo.png`}
                                    width="120"
                                    alt="SmartPlay"
                                    style={{ margin: "0 auto" }}
                                />
                            </Column>
                            <Column>
                                <Img
                                    src={`${baseUrl}/static/smart-tipping-logo.png`}
                                    width="120"
                                    alt="SmartTipping"
                                    style={{ margin: "0 auto" }}
                                />
                            </Column>
                            <Column>
                                <Img
                                    src={`${baseUrl}/static/smartodds-logo.png`}
                                    width="120"
                                    alt="SmartOdds"
                                    style={{ margin: "0 auto" }}
                                />
                            </Column>
                        </Row>
                        <Row style={socialLinks}>
                            {[
                                { name: "Facebook", icon: "fb.png" },
                                { name: "Instagram", icon: "ig.png" },
                                { name: "Twitter", icon: "twitter.png" },
                                { name: "LinkedIn", icon: "linkedin.png" },
                                { name: "YouTube", icon: "youtube.png" },
                                { name: "TikTok", icon: "tiktok.png" },
                                { name: "Vemeo", icon: "vemeo.png" },
                            ].map((platform, i) => (
                                <Column key={i} style={socialIconColumn}>
                                    <Link href="#" style={socialLink}>
                                        <Img
                                            src={`${baseUrl}/static/icons/${platform.icon}`}
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
                                        src={`${baseUrl}/static/app-store.png`}
                                        width="120"
                                        alt="Download on App Store"
                                    />
                                </Link>
                                <Link href="https://play.google.com" style={appStoreButton}>
                                    <Img
                                        src={`${baseUrl}/static/play-store.png`}
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
    padding: "0 15px",
    margin: "15px 0",
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "20px",
    margin: "0 0 15px",
    color: "#333",
};

const runnersSection = {
    padding: "0 15px",
    margin: "15px 0",
};

const fixtureRowContainer = {
    backgroundColor: "#ffffff",
    marginBottom: "5px",
};

const runnerNumber = {
    fontSize: "24px",
    fontWeight: "700",
    color: "#333",
    margin: "0",
};

const runnerName = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 4px 0",
    textAlign: "left",
};

const runnerDetails = {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 2px 0",
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
    fontSize: "14px",
    color: "#666",
    margin: "0",
    fontWeight: "500",
};

const arrowText = {
    fontSize: "18px",
    color: "#3665f9",
    margin: "0",
    fontWeight: "bold",
};

const bookmakerLabelColumn = {
    backgroundColor: "#2f6e35",
    borderRadius: "4px 4px 0 0",
    padding: "2px 8px",
    minWidth: "80px",
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
    minWidth: "80px",
    textAlign: "center",
};

const mainOddsValueStyle = {
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    margin: "0",
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
    textAlign: "left",
    padding: "0 4px",
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
    color: "#333",
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
    borderRadius: "4px",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "14px",
};

const viewAllButton = {
    ...submitButton,
    backgroundColor: "#666",
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

export default RacingBlackbookEmail; 