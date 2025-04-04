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
  } from '@react-email/components';
  import * as React from 'react';
  
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  
  interface FixtureProps {
    teams: {
      home: string;
      away: string;
    };
    odds: {
      home: {
        betfair: string;
        tab: string;
        bookmaker: string;
        ladbrokes: string;
        mainOddsValue?: string;
        bookmakerLabel?: string;
      };
      away: {
        betfair: string;
        tab: string;
        bookmaker: string;
        ladbrokes: string;
        mainOddsValue?: string;
        bookmakerLabel?: string;
      };
    };
  }
  
  const FixtureRow: React.FC<FixtureProps> = ({ teams, odds }) => (
    <>
      <Section style={fixtureRowContainer}>
        {/* Home Team Row */}
        <Row style={{ marginBottom: '10px' }}>
          <Column style={{ width: '70%' }}>
            <Row>
              <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                <Img
                  src={`${baseUrl}/static/defaultTeam.png`}
                  width="60"
                  height="60"
                  alt={teams.home}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: 'middle' }}>
                <Text style={teamName}>{teams.home}</Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: '30%', textAlign: 'right' }}>
            <div style={{ width: '100px', marginLeft: 'auto' }}>
              <div style={bookmakerLabelColumn}>
                <Text style={bookmakerLabelText}>{odds.home.bookmakerLabel || "BOOKMAKER"}</Text>
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>{odds.home.mainOddsValue || "5.00"}</Text>
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
                  src={`${baseUrl}/static/defaultTeam.png`}
                  width="60"
                  height="60"
                  alt={teams.away}
                  style={teamLogo}
                />
              </Column>
              <Column style={{ verticalAlign: 'middle' }}>
                <Text style={teamName}>{teams.away}</Text>
              </Column>
            </Row>
          </Column>
          <Column style={{ width: '30%', textAlign: 'right' }}>
            <div style={{ width: '100px', marginLeft: 'auto' }}>
              <div style={bookmakerLabelColumn}>
                <Text style={bookmakerLabelText}>{odds.away.bookmakerLabel || "BOOKMAKER"}</Text>
              </div>
              <div style={bookmakerOdds}>
                <Text style={mainOddsValueStyle}>{odds.away.mainOddsValue || "5.00"}</Text>
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
        <Column style={oddsItemBetfair}>
          <Text style={oddsText}>{odds.home.betfair}</Text>
        </Column>
        <Column style={oddsItemTab}>
          <Text style={oddsText}>{odds.home.tab}</Text>
        </Column>
        <Column style={oddsItemBookmaker}>
          <Text style={oddsText}>{odds.home.bookmaker}</Text>
        </Column>
        <Column style={oddsItemLadbrokes}>
          <Text style={oddsText}>{odds.home.ladbrokes}</Text>
        </Column>
      </Row>

      <Row style={oddsRowStyle}>
        <Text style={oddsRowLabel}>{teams.away} - Featured Bookmaker Odds</Text>
      </Row>
      <Row style={allOddsRow}>
        <Column style={oddsItemBetfair}>
          <Text style={oddsText}>{odds.away.betfair}</Text>
        </Column>
        <Column style={oddsItemTab}>
          <Text style={oddsText}>{odds.away.tab}</Text>
        </Column>
        <Column style={oddsItemBookmaker}>
          <Text style={oddsText}>{odds.away.bookmaker}</Text>
        </Column>
        <Column style={oddsItemLadbrokes}>
          <Text style={oddsText}>{odds.away.ladbrokes}</Text>
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
        <Head />
        <Preview>Round {roundNumber} of the AFL starts at {startTime} AEST {startDate}</Preview>
        <Body style={main}>
          <Container style={container}>
            {/* Logo */}
            <Section style={{ textAlign: 'center', marginTop: '15px', marginBottom: '25px' }}>
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
              <Text style={paragraph}>
                Hi {name},
              </Text>
              <Text style={paragraph}>
                Round {roundNumber} of the AFL starts at 7:50 pm AEST this Saturday, February 1st! Don't forget to get your tips in before the game begins.
              </Text>
              <Text style={paragraph}>
                Good luck!
              </Text>
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
                  away: "Melbourne Demons"
                }}
                odds={{
                  home: {
                    betfair: "2.00",
                    tab: "4.50",
                    bookmaker: "6.90",
                    ladbrokes: "5.00"
                  },
                  away: {
                    betfair: "2.00",
                    tab: "4.50",
                    bookmaker: "6.90",
                    ladbrokes: "5.00"
                  }
                }}
              />
            </Section>
  
            {/* Saturday Fixtures */}
            <Section style={fixtureSection}>
              <Text style={dateHeader}>Saturday 02/02/2025 | 07:50PM</Text>
              <FixtureRow 
                teams={{
                  home: "[Team_1]",
                  away: "[Team_2]"
                }}
                odds={{
                  home: {
                    betfair: "2.10",
                    tab: "3.20",
                    bookmaker: "1.80",
                    ladbrokes: "1.58"
                  },
                  away: {
                    betfair: "2.10",
                    tab: "3.20",
                    bookmaker: "1.80",
                    ladbrokes: "1.58"
                  }
                }}
              />
            </Section>
  
            {/* Sunday Fixtures */}
            <Section style={fixtureSection}>
              <Text style={dateHeader}>Sunday 03/02/2025 | 07:50PM</Text>
              <FixtureRow 
                teams={{
                  home: "[Team_1]",
                  away: "[Team_2]"
                }}
                odds={{
                  home: {
                    betfair: "2.10",
                    tab: "3.20",
                    bookmaker: "1.80",
                    ladbrokes: "1.58"
                  },
                  away: {
                    betfair: "2.10",
                    tab: "3.20",
                    bookmaker: "1.80",
                    ladbrokes: "1.58"
                  }
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
                Please remember that the closing time for tipping in the first game of Round {roundNumber} is Saturday, February 1 at 07:50 PM
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
                src={`${baseUrl}/static/smartb-footer-logo.png`}
                width="120"
                height="30"
                alt="SmartB"
                style={footerLogo}
              />
              <Row style={footerBrands}>
                <Column>
                  <Img
                    src={`${baseUrl}/static/smartplay-logo.png`}
                    width="80"
                    height="20"
                    alt="SmartPlay"
                  />
                </Column>
                <Column>
                  <Img
                    src={`${baseUrl}/static/smarttipping-logo.png`}
                    width="80"
                    height="20"
                    alt="SmartTipping"
                  />
                </Column>
                <Column>
                  <Img
                    src={`${baseUrl}/static/smartodds-logo.png`}
                    width="80"
                    height="20"
                    alt="SmartOdds"
                  />
                </Column>
              </Row>
              <Row style={socialLinks}>
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok', 'Discord'].map((platform, i) => (
                  <Column key={i} style={socialIconColumn}>
                    <Link href="#" style={socialLink}>●</Link>
                  </Column>
                ))}
              </Row>
              <Text style={footerText}>
                Suite 302, Level 3 | 55 Market Street, Sydney, NSW 2000
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
                <Column style={{ textAlign: 'center' as const }}>
                  <Link href="https://apps.apple.com" style={appStoreButton}>
                    <Img
                      src={`${baseUrl}/static/app-store.png`}
                      width="120"
                      height="40"
                      alt="Download on App Store"
                    />
                  </Link>
                </Column>
                <Column style={{ textAlign: 'center' as const }}>
                  <Link href="https://play.google.com" style={appStoreButton}>
                    <Img
                      src={`${baseUrl}/static/play-store.png`}
                      width="120"
                      height="40"
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
  
  const main = {
    backgroundColor: '#f5f8fa',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: '0 auto',
    padding: '0',
    maxWidth: '600px',
    backgroundColor: '#ffffff',
  };
  
  const logo = {
    margin: '0 auto',
  };
  
  const section = {
    padding: '0 15px',
    margin: '15px 0',
  };
  
  const paragraph = {
    fontSize: '14px',
    lineHeight: '20px',
    margin: '0 0 15px',
    color: '#333',
  };
  
  const roundHeader = {
    backgroundColor: '#f5f5f5',
    padding: '10px 15px',
    margin: '10px 0',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
  };
  
  const h2 = {
    fontSize: '16px',
    fontWeight: '700',
    margin: '0',
    color: '#333',
  };
  
  const fixtureSection = {
    padding: '0 15px',
    margin: '15px 0',
  };
  
  const dateHeader = {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 12px',
    fontWeight: '500',
  };
  
  const fixtureRowContainer = {
    backgroundColor: '#ffffff',
    padding: '8px 12px',
    marginBottom: '5px',
  };
  
  const teamLogo = {
    borderRadius: '50%',
    backgroundColor: '#444',
    width: '60px',
    height: '60px',
  };
  
  const teamName = {
    fontSize: '14px',
    margin: '0',
    color: '#333',
    fontWeight: '500',
    paddingLeft: '10px',
  };
  
  const bookmakerLabelColumn = {
    backgroundColor: '#2f6e35',
    borderRadius: '4px 4px 0 0',
    padding: '2px 8px',
    width: '100px',
    textAlign: 'center' as const,
  };
  
  const bookmakerLabelText = {
    color: '#ffffff',
    fontSize: '10px',
    fontWeight: '600',
    margin: '0',
  };
  
  const bookmakerOdds = {
    backgroundColor: '#e6e6e6',
    borderRadius: '0 0 4px 4px',
    padding: '4px 8px',
    width: '100px',
    textAlign: 'center' as const,
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
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
    marginBottom: '16px',
    padding: '0 12px',
  };
  
  const oddsItemBase = {
    padding: '6px 4px',
    borderRadius: '4px',
    textAlign: 'center' as const,
    minWidth: '50px',
  };
  
  const oddsItemBetfair = {
    ...oddsItemBase,
    backgroundColor: '#ffb74d',
  };
  
  const oddsItemTab = {
    ...oddsItemBase,
    backgroundColor: '#4caf50',
  };
  
  const oddsItemBookmaker = {
    ...oddsItemBase,
    backgroundColor: '#ff4d4d',
  };
  
  const oddsItemLadbrokes = {
    ...oddsItemBase,
    backgroundColor: '#2196f3',
  };
  
  const oddsText = {
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: '600',
    margin: '0',
  };
  
  const submitSection = {
    textAlign: 'center' as const,
    margin: '25px 0',
  };
  
  const submitButton = {
    backgroundColor: '#3665f9',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '4px',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  };
  
  const reminderSection = {
    padding: '15px',
    backgroundColor: '#f9f9f9',
    margin: '20px 0',
    borderRadius: '0',
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
  };
  
  const reminderText = {
    fontSize: '14px',
    color: '#666',
    margin: '0 0 15px',
  };
  
  const bannerSection = {
    margin: '20px 0',
  };
  
  const bannerImage = {
    width: '100%',
    display: 'block',
  };
  
  const gamblingBanner = {
    backgroundColor: '#f9f9f9',
    padding: '15px',
    margin: '20px 0',
    borderRadius: '0',
    color: '#333',
    textAlign: 'center' as const,
    borderTop: '1px solid #e0e0e0',
    borderBottom: '1px solid #e0e0e0',
  };
  
  const gamblingHeader = {
    fontSize: '16px',
    fontWeight: '600',
    margin: '0 0 5px',
    color: '#333',
  };
  
  const gamblingText = {
    fontSize: '14px',
    margin: '0',
  };
  
  const gamblingLink = {
    color: '#2196f3',
    textDecoration: 'underline',
  };
  
  const footer = {
    backgroundColor: '#003764',
    padding: '20px 15px',
    textAlign: 'center' as const,
    color: '#ffffff',
    marginTop: '20px',
  };
  
  const footerLogo = {
    margin: '0 auto 15px',
  };
  
  const footerBrands = {
    marginBottom: '15px',
  };
  
  const socialLinks = {
    margin: '15px 0',
  };
  
  const socialIconColumn = {
    padding: '0 5px',
  };
  
  const socialLink = {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '16px',
  };
  
  const footerText = {
    fontSize: '12px',
    margin: '10px 0',
    color: '#ffffff',
  };
  
  const footerDisclaimer = {
    fontSize: '11px',
    color: '#cccccc',
    margin: '10px 0',
  };
  
  const footerLink = {
    color: '#cccccc',
    textDecoration: 'underline',
  };
  
  const copyright = {
    fontSize: '11px',
    color: '#cccccc',
    margin: '15px 0',
  };
  
  const appStoreSection = {
    margin: '15px 0 0',
  };
  
  const appStoreButton = {
    display: 'inline-block',
    margin: '0 5px',
  };
  
  const mainOddsValueStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    margin: '0',
  };
  
  export default SmartTippingEmail;