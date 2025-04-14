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
}) => (
    <>
        <Section style={betRowContainer}>
            <Text style={raceTitle}>{raceName} (Race {raceNumber})</Text>

            <Text style={commentStyle}>{raceComment}</Text>

            <Text style={analystStyle}>Analyst: {analyst}</Text>

            <Row style={raceDetailsRow}>
                <Text style={raceDetailsText}>
                    {date} | {time} | {distance}
                </Text>
            </Row>

            {/* Runner Details */}
            <Row style={runnerDetailsContainer}>
                <Column style={{ width: "70%" }}>
                    <Text style={runnerNumber}>{runner.number}. {runner.name}</Text>
                    <Text style={runnerDetails}>J: {runner.jockey}</Text>
                    <Text style={runnerDetails}>T: {runner.trainer}</Text>
                </Column>
                <Column style={{ width: "30%", textAlign: "right" }}>
                    <div style={oddsContainer}>
                        <div style={bookmakerLabel}>
                            <Text style={bookmakerLabelText}>BET365</Text>
                        </div>
                        <div style={oddsBox}>
                            <Text style={oddsValue}>{odds.bet365}</Text>
                        </div>
                    </div>
                </Column>
            </Row>

            <Row style={venueRow}>
                <Column style={{ width: "90%" }}>
                    <Text style={venueText}>R{raceNumber} {runner.venue}</Text>
                </Column>
                <Column style={{ width: "10%", textAlign: "right" }}>
                    <Text style={arrowText}>→</Text>
                </Column>
            </Row>

            {/* Featured Bookmaker Odds */}
            <Section>
                <Text style={featuredOddsTitle}>Featured Bookmaker Odds</Text>
                <Row style={allOddsRow}>
                    <Column style={{ width: "25%", padding: "0 4px" }}>
                        <div style={{ ...bookmakerBox, backgroundColor: "#ffb74d" }}>
                            <Text style={bookmakerName}>BETFAIR</Text>
                        </div>
                        <div style={oddsBoxSmall}>
                            <Text style={oddsValueSmall}>{odds.betfair}</Text>
                        </div>
                    </Column>
                    <Column style={{ width: "25%", padding: "0 4px" }}>
                        <div style={{ ...bookmakerBox, backgroundColor: "#4caf50" }}>
                            <Text style={bookmakerName}>TAB</Text>
                        </div>
                        <div style={oddsBoxSmall}>
                            <Text style={oddsValueSmall}>{odds.tab}</Text>
                        </div>
                    </Column>
                    <Column style={{ width: "25%", padding: "0 4px" }}>
                        <div style={{ ...bookmakerBox, backgroundColor: "#ff4d4d" }}>
                            <Text style={bookmakerName}>BOOMBET</Text>
                        </div>
                        <div style={oddsBoxSmall}>
                            <Text style={oddsValueSmall}>{odds.boombet}</Text>
                        </div>
                    </Column>
                    <Column style={{ width: "25%", padding: "0 4px" }}>
                        <div style={{ ...bookmakerBox, backgroundColor: "#e53935" }}>
                            <Text style={bookmakerName}>LADBROKES</Text>
                        </div>
                        <div style={oddsBoxSmall}>
                            <Text style={oddsValueSmall}>{odds.ladbrokes}</Text>
                        </div>
                    </Column>
                </Row>
            </Section>
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
                    <Section style={logoSection}>
                        <Img
                            src={mediaConfig.logos.smartB}
                            width="150"
                            height="100%"
                            alt="SmartB"
                            style={logo}
                        />
                    </Section>

                    {/* Greeting */}
                    <Section style={section}>
                        <Text style={paragraph}>Hi {firstName},</Text>
                        <Text style={paragraph}>
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
                                date={new Date(bet.betRace?.startDate).toLocaleDateString()}
                                time={new Date(bet.betRace?.startDate).toLocaleTimeString()}
                                distance={bet.betRace?.distance + "m"}
                                runner={{
                                    number: bet.betParticipant?.runnerNumber,
                                    name: bet.betParticipant?.animal?.name,
                                    jockey: bet.betParticipant?.Jockey?.name,
                                    trainer: bet.betParticipant?.Trainer?.name,
                                    venue: bet.Event?.trackName
                                }}
                                odds={{
                                    bet365: bet.maxOdd,
                                    betfair: "2.00",
                                    tab: "4.50",
                                    boombet: "6.90",
                                    ladbrokes: "5.00"
                                }}
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

                        {/* Social Links */}
                        <Row style={socialLinks}>
                            {[
                                { name: "Facebook", icon: "fb.png", url: mediaConfig.social.facebook },
                                { name: "Instagram", icon: "ig.png", url: mediaConfig.social.instagram },
                                { name: "Twitter", icon: "twitter.png", url: mediaConfig.social.twitter },
                                { name: "LinkedIn", icon: "linkedin.png", url: mediaConfig.social.linkedin },
                                { name: "YouTube", icon: "youtube.png", url: mediaConfig.social.youtube },
                                { name: "TikTok", icon: "tiktok.png", url: mediaConfig.social.tiktok },
                                { name: "Vemeo", icon: "vemeo.png", url: mediaConfig.social.vemeo },
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
                            Send us Email To:
                            <br />
                            info@smartb.com.au
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

                        {/* App Store Links */}
                        <Row style={appStoreSection}>
                            <Column style={{ textAlign: "center" }}>
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
    padding: "0 15px",
    margin: "15px 0",
};

const paragraph = {
    fontSize: "14px",
    lineHeight: "20px",
    margin: "0 0 15px",
    color: "#333",
};

const sectionTitle = {
    fontSize: "18px",
    fontWeight: "700",
    color: "#333",
    margin: "0 0 20px",
    textAlign: "left",
    padding: "0 15px",
};

const betsSection = {
    margin: "20px 0",
};

const betRowContainer = {
    backgroundColor: "#ffffff",
    margin: "0 15px 20px",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #E8EAEC",
};

const raceTitle = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 10px",
};

const commentStyle = {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 10px",
    lineHeight: "1.4",
};

const analystStyle = {
    fontSize: "14px",
    color: "#333",
    fontWeight: "500",
    margin: "0 0 10px",
};

const raceDetailsRow = {
    marginBottom: "15px",
};

const raceDetailsText = {
    fontSize: "14px",
    color: "#666",
    margin: "0",
};

const runnerDetailsContainer = {
    marginBottom: "10px",
};

const runnerNumber = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0 0 5px",
};

const runnerDetails = {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 3px",
};

const oddsContainer = {
    width: "100px",
    marginLeft: "auto",
};

const bookmakerLabel = {
    backgroundColor: "#2f6e35",
    borderRadius: "4px 4px 0 0",
    padding: "2px 8px",
    textAlign: "center",
};

const bookmakerLabelText = {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
};

const oddsBox = {
    backgroundColor: "#e6e6e6",
    borderRadius: "0 0 4px 4px",
    padding: "6px 8px",
    textAlign: "center",
};

const oddsValue = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0",
};

const venueRow = {
    backgroundColor: "#f5f5f5",
    padding: "8px 12px",
    borderRadius: "4px",
    marginTop: "10px",
    marginBottom: "15px",
};

const venueText = {
    fontSize: "14px",
    color: "#666",
    margin: "0",
};

const arrowText = {
    fontSize: "18px",
    color: "#3665f9",
    margin: "0",
};

const featuredOddsTitle = {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 10px",
};

const allOddsRow = {
    width: "100%",
};

const bookmakerBox = {
    borderRadius: "4px 4px 0 0",
    padding: "4px",
    textAlign: "center",
};

const bookmakerName = {
    color: "#ffffff",
    fontSize: "12px",
    fontWeight: "600",
    margin: "0",
};

const oddsBoxSmall = {
    backgroundColor: "#f5f5f5",
    borderRadius: "0 0 4px 4px",
    padding: "6px 4px",
    textAlign: "center",
};

const oddsValueSmall = {
    color: "#333",
    fontSize: "14px",
    fontWeight: "600",
    margin: "0",
};

// Footer Styles
const gamblingBanner = {
    backgroundColor: "#f9f9f9",
    padding: "15px",
    margin: "20px 15px",
    borderRadius: "4px",
    textAlign: "center",
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
    color: "#666",
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