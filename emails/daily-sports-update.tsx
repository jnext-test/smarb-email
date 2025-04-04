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

interface NewsItemProps {
  title: string;
  imageUrl: string;
  link: string;
}

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

const NewsItem: React.FC<NewsItemProps> = ({ title, imageUrl, link }) => (
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
      <Text style={readMore}>Read more</Text>
    </Link>
  </Column>
);

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
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#ffb74d' }}>
          <Text style={bookmakerName}>BETFAIR</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.betfair}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#4caf50' }}>
          <Text style={bookmakerName}>TAB</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.tab}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#ff4d4d' }}>
          <Text style={bookmakerName}>BOOKIE</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.home.bookmaker}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#2196f3' }}>
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
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#ffb74d' }}>
          <Text style={bookmakerName}>BETFAIR</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.betfair}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#4caf50' }}>
          <Text style={bookmakerName}>TAB</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.tab}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#ff4d4d' }}>
          <Text style={bookmakerName}>BOOKIE</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.bookmaker}</Text>
        </div>
      </Column>
      <Column style={{ width: '25%', padding: '0 4px' }}>
        <div style={{ ...bookmakerBox, backgroundColor: '#2196f3' }}>
          <Text style={bookmakerName}>LADBROKES</Text>
        </div>
        <div style={oddsBox}>
          <Text style={oddsValue}>{odds.away.ladbrokes}</Text>
        </div>
      </Column>
    </Row>
  </>
);

const DailySportsUpdateEmail = ({
  name = "Name",
  date = "Saturday, February 1",
  year = "2025",
}) => {
  return (
    <Html>
      <Head />
      <Preview>Here's your daily update on Australian Rules for today, {date}, {year}</Preview>
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
              Here's your daily update on Australian Rules for today, {date}, {year}
            </Text>
          </Section>

          {/* Latest News Section */}
          <Section style={section}>
            <Heading style={sectionHeader}>LATEST NEWS</Heading>
            <Row>
              <NewsItem
                title="No one can stop the unstoppable Melbourne! The decade has compounded Melbourne's Christmas loss"
                imageUrl={`${baseUrl}/static/news1.jpg`}
                link="#"
              />
              <NewsItem
                title="No one can stop the unstoppable Melbourne! The decade has compounded Melbourne's Christmas loss"
                imageUrl={`${baseUrl}/static/news2.jpg`}
                link="#"
              />
            </Row>
            <Section style={viewAllSection}>
              <Button style={viewAllButton} href="#">
                Click here to see all news
              </Button>
            </Section>
          </Section>

          {/* Upcoming Fixtures Section */}
          <Section style={section}>
            <Heading style={sectionHeader}>UPCOMING FIXTURES</Heading>
            <Text style={sportLabel}>AUSTRALIAN RULES</Text>
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
                  ladbrokes: "5.00",
                  mainOddsValue: "5.00",
                  bookmakerLabel: "BOOKMAKER"
                },
                away: {
                  betfair: "2.00",
                  tab: "4.50",
                  bookmaker: "6.90",
                  ladbrokes: "5.00",
                  mainOddsValue: "5.00",
                  bookmakerLabel: "BOOKMAKER"
                }
              }}
            />
          </Section>

          {/* View All Fixtures Button */}
          <Section style={viewAllSection}>
            <Button style={viewAllButton} href="#">
              Click here to see all upcoming fixtures
            </Button>
          </Section>

          {/* Latest Results Section */}
          <Section style={section}>
            <Heading style={sectionHeader}>LATEST RESULTS</Heading>
            <Text style={sportLabel}>SPORTS</Text>
            <Text style={dateHeader}>Friday 01/02/2025 | 07:50PM</Text>
            <Row style={resultRow}>
              <Column style={{ width: '70%' }}>
                <Row>
                  <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                    <Img
                      src={`${baseUrl}/static/defaultTeam.png`}
                      width="60"
                      height="60"
                      alt="Team 1"
                      style={teamLogo}
                    />
                  </Column>
                  <Column style={{ verticalAlign: 'middle' }}>
                    <Text style={teamName}>Team 1</Text>
                  </Column>
                </Row>
              </Column>
              <Column style={{ width: '30%', textAlign: 'right' }}>
                <Text style={scoreText}>124</Text>
              </Column>
            </Row>
            <Row style={resultRow}>
              <Column style={{ width: '70%' }}>
                <Row>
                  <Column style={{ width: '60px', verticalAlign: 'middle' }}>
                    <Img
                      src={`${baseUrl}/static/defaultTeam.png`}
                      width="60"
                      height="60"
                      alt="Team 2"
                      style={teamLogo}
                    />
                  </Column>
                  <Column style={{ verticalAlign: 'middle' }}>
                    <Text style={teamName}>Team 2</Text>
                  </Column>
                </Row>
              </Column>
              <Column style={{ width: '30%', textAlign: 'right' }}>
                <Text style={scoreText}>110</Text>
              </Column>
            </Row>
          </Section>

          {/* View All Results Button */}
          <Section style={viewAllSection}>
            <Button style={viewAllButton} href="#">
              Click here to see all results
            </Button>
          </Section>

          {/* Expert Tips Section */}
          <Section style={section}>
            <Heading style={sectionHeader}>EXPERT TIPS</Heading>
            <Text style={sportLabel}>SPORTS</Text>
            <Text style={dateHeader}>Friday 01/02/2025 | 07:50PM</Text>
            <Row style={tipRow}>
              <Column style={{ width: '70%' }}>
                <Text style={tipTitle}>Expert Tips for Round 11</Text>
              </Column>
              <Column style={{ width: '30%', textAlign: 'right' }}>
                <Button style={checkTipsButton} href="#">
                  Check Tips
                </Button>
              </Column>
            </Row>
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
              alt="SmartB"
              style={footerLogo}
            />
            <Row style={footerBrands}>
              <Column>
                <Img
                  src={`${baseUrl}/static/smart-play-footer-logo.png`}
                  width="120"
                  alt="SmartPlay"
                />
              </Column>
              <Column>
                <Img
                  src={`${baseUrl}/static/smart-tipping-logo.png`}
                  width="120"
                  alt="SmartTipping"
                />
              </Column>
              <Column>
                <Img
                  src={`${baseUrl}/static/smartodds-logo.png`}
                  width="120"
                  alt="SmartOdds"
                />
              </Column>
            </Row>
            <Row style={socialLinks}>
              {[
                { name: 'Facebook', icon: 'fb.png' },
                { name: 'Instagram', icon: 'ig.png' },
                { name: 'Twitter', icon: 'twitter.png' },
                { name: 'LinkedIn', icon: 'linkedin.png' },
                { name: 'YouTube', icon: 'youtube.png' },
                { name: 'TikTok', icon: 'tiktok.png' },
                { name: 'Vemeo', icon: 'vemeo.png' }
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
              Don't want to get notifications? <Link href="#" style={footerLink}>Unsubscribe here</Link>
              <br />
              View our updated <Link href="#" style={footerLink}>Privacy Policy</Link>
            </Text>
            <Text style={copyright}>
              Copyright © SmartB Pty Ltd 2022
            </Text>
            <Row style={appStoreSection}>
              <Column style={{ textAlign: 'center' as const }}>
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

const sectionHeader = {
  fontSize: '16px',
  fontWeight: '700',
  color: '#333',
  margin: '0 0 15px',
  backgroundColor: '#f5f5f5',
  padding: '10px 15px',
  borderTop: '1px solid #e0e0e0',
  borderBottom: '1px solid #e0e0e0',
};

const paragraph = {
  fontSize: '14px',
  lineHeight: '20px',
  margin: '0 0 15px',
  color: '#333',
};

const newsItemColumn = {
  width: '50%',
  padding: '0 8px',
};

const newsLink = {
  textDecoration: 'none',
  color: 'inherit',
};

const newsImage = {
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
  marginBottom: '8px',
};

const newsTitle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#333',
  margin: '0 0 8px',
  lineHeight: '1.4',
};

const readMore = {
  fontSize: '12px',
  color: '#3665f9',
  margin: '0',
  textDecoration: 'underline',
};

const viewAllSection = {
  textAlign: 'center' as const,
  margin: '20px 0',
};

const viewAllButton = {
  backgroundColor: '#666',
  color: '#ffffff',
  padding: '10px 20px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '14px',
};

const sportLabel = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#333',
  margin: '0 0 8px',
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
  textAlign: 'center' as const,
  marginBottom: '4px',
};

const bookmakerName = {
  color: '#ffffff',
  fontSize: '12px',
  fontWeight: '700',
  margin: '0',
  textTransform: 'uppercase' as const,
};

const oddsBox = {
  backgroundColor: '#f5f5f5',
  borderRadius: '4px',
  padding: '6px 4px',
  textAlign: 'center' as const,
  minWidth: '50px',
};

const oddsValue = {
  color: '#333',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0',
};

const resultRow = {
  padding: '8px 12px',
  borderBottom: '1px solid #e0e0e0',
};

const scoreText = {
  fontSize: '18px',
  fontWeight: '700',
  color: '#333',
  margin: '0',
};

const tipRow = {
  padding: '12px',
  backgroundColor: '#f9f9f9',
  borderRadius: '4px',
};

const tipTitle = {
  fontSize: '14px',
  fontWeight: '600',
  color: '#333',
  margin: '0',
};

const checkTipsButton = {
  backgroundColor: '#3665f9',
  color: '#ffffff',
  padding: '6px 12px',
  borderRadius: '4px',
  textDecoration: 'none',
  fontSize: '12px',
  fontWeight: '600',
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
  textAlign: 'center' as const,
};

const socialIconColumn = {
  padding: '0 5px',
  display: 'inline-block',
};

const socialLink = {
  textDecoration: 'none',
  display: 'inline-block',
};

const socialIcon = {
  display: 'inline-block',
  verticalAlign: 'middle',
  width: '24px',
  height: '24px',
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
  textAlign: 'center' as const,
  fontSize: 0,
};

const appStoreButton = {
  display: 'inline-block',
  margin: '0 2px',
  verticalAlign: 'middle',
};

export default DailySportsUpdateEmail; 