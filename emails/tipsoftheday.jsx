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
import emailResponseData from "./static/data/tipsoftheday.json";

const TipRow = ({
    raceName,
    raceNumber,
    date,
    time,
    distance,
    runner,
    odds,
    venue,
    redirectUrl,
}) => (
    <>
        <Section style={tipRowContainer}>
            <Row style={raceInfoRow}>
                <Column>
                    <Text style={raceNumberText}>{raceNumber}. {raceName}</Text>
                </Column>
            </Row>

            {/* Runner Details */}
            <Row style={runnerDetailsContainer}>
                <Column style={{ width: "70%" }}>
                    <Text style={runnerDetails}>J: {runner.jockey}</Text>
                    <Text style={runnerDetails}>T: {runner.trainer}</Text>
                    <Text style={runnerWeight}>W: {runner.weight}</Text>
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

            <Link href={redirectUrl} style={{ textDecoration: "none" }}>
                <Row style={venueRow}>
                    <Column style={{ width: "90%" }}>
                        <Text style={venueText}>{venue}</Text>
                    </Column>
                    <Column style={{ width: "10%", textAlign: "right" }}>
                        <Text style={arrowText}>→</Text>
                    </Column>
                </Row>
            </Link>

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

const TipsOfTheDayEmail = () => {
    const {
        firstName = "Name",
        currentDate = "Saturday, February 1, 2025",
        raceData = { resultsData: [] },
    } = emailResponseData;

    return (
        <Html>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
                />
            </Head>
            <Preview>Your SmartB Tip of the Day from the EXPERTS for {currentDate} is right here!</Preview>
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
                            Your <span style={{ fontWeight: "bold" }}>SmartB Tip of the Day</span> from the <span style={{ fontWeight: "bold" }}>EXPERTS</span> for <span style={{ fontWeight: "bold" }}>{new Date(currentDate).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' }).replace(/,/g, '')}</span> is right here!
                        </Text>
                    </Section>

                    {/* Tip of the Day Section */}
                    <Section style={tipsSection}>
                        <Heading style={sectionTitle}>SMARTB TIP OF THE DAY</Heading>

                        {raceData.resultsData.map((race, index) => (
                            <TipRow
                                key={index}
                                raceName={race.raceName}
                                raceNumber={race.raceNumber}
                                date={new Date(race.startDate).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' })}
                                time={new Date(race.startDate).toLocaleTimeString()}
                                distance="1500m"
                                runner={{
                                    jockey: race.JockeyName,
                                    trainer: race.TrainerName,
                                    weight: race.jockeyWeight
                                }}
                                odds={{
                                    bet365: race.maxOdd,
                                    betfair: "2.00",
                                    tab: "4.50",
                                    boombet: "6.90",
                                    ladbrokes: "5.00"
                                }}
                                venue={race.TrackName}
                                redirectUrl={race.redirectUrl}
                            />
                        ))}
                    </Section>

                    {/* Winners from Last Week Section */}
                    <Section style={winnersSection}>
                        <Heading style={sectionTitle}>SMARTB WINNERS FROM LAST WEEK</Heading>
                        {raceData.resultsData.slice(1).map((race, index) => (
                            <TipRow
                                key={index}
                                raceName={race.raceName}
                                raceNumber={race.raceNumber}
                                date={new Date(race.startDate).toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric' })}
                                time={new Date(race.startDate).toLocaleTimeString()}
                                distance="1500m"
                                runner={{
                                    jockey: race.JockeyName,
                                    trainer: race.TrainerName,
                                    weight: race.jockeyWeight
                                }}
                                odds={{
                                    bet365: race.maxOdd,
                                    betfair: "2.00",
                                    tab: "4.50",
                                    boombet: "6.90",
                                    ladbrokes: "5.00"
                                }}
                                venue={race.TrackName}
                                redirectUrl={race.redirectUrl}
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
                                    src={mediaConfig.logos.smartTippingWhite}
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

const tipsSection = {
    margin: "20px 0",
};

const winnersSection = {
    margin: "20px 0",
    backgroundColor: "#f8f9fa",
    padding: "20px 0",
};

const tipRowContainer = {
    backgroundColor: "#ffffff",
    margin: "0 15px 20px",
    padding: "15px",
    borderRadius: "8px",
    border: "1px solid #E8EAEC",
};

const raceInfoRow = {
    marginBottom: "15px",
};

const raceNumberText = {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    margin: "0",
};

const runnerDetailsContainer = {
    marginBottom: "10px",
};

const runnerDetails = {
    fontSize: "14px",
    color: "#666",
    margin: "0 0 3px",
};

const runnerWeight = {
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

export default TipsOfTheDayEmail; 