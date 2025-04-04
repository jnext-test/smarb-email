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
  : '';

const SmartPlayLaunchEmail = ({name = "User"}) => {
  return (
    <Html>
      <Head />
      <Preview>Everything Fantasy Sports, All in One Place! Launch Update</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Logo */}
          <Section style={{ textAlign: 'center', marginBottom: '20px' }}>
            <Img
              src={`${baseUrl}/static/smart-play-logo.svg`}
              width="120"
              height="35"
              alt="SmartPlay"
              style={{ margin: '20px auto' }}
            />
          </Section>

          {/* Hero Banner */}
          <Section style={heroBanner}>
            <Img
              src={`${baseUrl}/static/hero-banner.png`}
              width="600"
              height="200"
              alt="Fantasy Sports Banner"
              style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}
            />
          </Section>

          {/* Welcome Message */}
          <Section style={messageSection}>
            <Text style={paragraph}>
              Hi {name},
            </Text>
            <Text style={paragraph}>
              We're thrilled to share an update on the SmartB's upcoming launch! Everything ready and final testing is moving fast ahead as we get closer to launch date of 15th of next month.
            </Text>
          </Section>

          {/* Sport Icons */}
          <Section style={heroBanner}>
            <Img
              src={`${baseUrl}/static/sportsHeader.png`}
              width="600"
              height="200"
              alt="Fantasy Sports Banner"
              style={{ width: '100%', height: 'auto' }}
            />
          </Section>

          {/* App Preview Section */}
          <Section style={previewSection}>
            <Heading style={h2}>As promised, here's a first look at the app</Heading>
            
            {/* Pick a Game */}
            <Section style={featureBlock}>
            <Img
                src={`${baseUrl}/static/pick-game.png`}
                width="280"
                alt="Pick a game interface"
                style={appScreenshot}
              />
              <Heading style={h3}>Pick a game</Heading>
              <Text style={featureText}>
                Choose games from all major leagues including
              </Text>
            
            </Section>

            {/* Build Your Team */}
            <Section style={featureBlock}>
            <Img
                src={`${baseUrl}/static/build-team.png`}
                width="300"
                alt="Build team interface"
                style={appScreenshot}
              />
              <Heading style={h3}>Build Your Team</Heading>
              <Text style={featureText}>
                Draft a balanced team of pro athletes players in various positions
              </Text>
             
            </Section>

            {/* Compete and Win */}
            <Section style={featureBlock}>
            <Img
                src={`${baseUrl}/static/compete.png`}
                width="280"
                alt="Competition interface"
                style={appScreenshot}
              />
              <Heading style={h3}>Compete and win!</Heading>
              <Text style={featureText}>
                Watch your teams live and compete to be the real-world match winner
              </Text>
            
            </Section>
          </Section>

          {/* Promotional Text */}
          <Section style={promoSection}>
            <Text style={paragraph}>
              Imagine building your dream lineup from the world's top sports! With SmartB, you'll be able to pick your players, lock in your team, and compete with others to win big in the SmartB Fantasy Sports Platform!
            </Text>
            <Text style={paragraph}>
              Plus, we're excited to announce that the platform will kick off with cricket too! How awesome is that?
            </Text>
          </Section>

          {/* Credits Offer */}
          <Section style={creditsSection}>
            <Text style={paragraph}>
              Thank you for being an early supporter. Your $50 free credits will be waiting in your account at launch, ready for you to jump in and experience SmartB's unique fantasy sports experience.
            </Text>
            <Text style={paragraph}>
              We'll keep you posted as we approach the final stages. Until then, don't miss out on SmartB's news, fixtures, results, and expert tips with our 50K+ followers!
            </Text>
          </Section>

          {/* App Store Buttons */}
          <Section style={appStoreSection}>
            <Row>
              <Column style={{ textAlign: 'center' as const }}>
                <Link href="https://apps.apple.com" style={appStoreButton}>
                  <Img
                    src={`${baseUrl}/static/app-store.png`}
                    width="160"
                    height="48"
                    alt="Download on App Store"
                  />
                </Link>
              </Column>
              <Column style={{ textAlign: 'center' as const }}>
                <Link href="https://play.google.com" style={appStoreButton}>
                  <Img
                    src={`${baseUrl}/static/play-store.png`}
                    width="160"
                    height="48"
                    alt="Get it on Google Play"
                  />
                </Link>
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Catch you soon,
              <br />
              The SmartB Team
            </Text>
            <Row style={socialLinks}>
              {['Twitter', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok', 'Discord'].map((platform, i) => (
                <Column key={i} style={socialIconColumn}>
                  <Link href="#" style={socialLink}>●</Link>
                </Column>
              ))}
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
  padding: '20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
};

const heroBanner = {
  position: 'relative' as const,
  backgroundColor: '#1a2b4b',
//   borderRadius: '8px',
  overflow: 'hidden',
  marginBottom: '30px',
};

const heroContent = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textAlign: 'center' as const,
  width: '100%',
};

const h1 = {
  color: '#ffffff',
  fontSize: '36px',
  fontWeight: '800',
  lineHeight: '1.1',
  margin: '0',
  textAlign: 'center' as const,
  textTransform: 'uppercase' as const,
};

const messageSection = {
  padding: '0 20px',
  margin: '30px 0',
};

const sportIconsSection = {
  margin: '30px 0',
  backgroundColor: '#f8fafc',
  padding: '20px',
  borderRadius: '8px',
};

const sportIconColumn = {
  textAlign: 'center' as const,
  padding: '0 5px',
};

const sportIcon = {
  fontSize: '16px',
  margin: '0',
  color: '#1a2b4b',
};

const previewSection = {
  padding: '30px 0',
  backgroundColor: '#003764',
  color: '#ffffff',
};

const h2 = {

  fontSize: '24px',
  fontWeight: '600',
  textAlign: 'center' as const,
  margin: '0 0 30px',
};

const h3 = {

  fontSize: '20px',
  fontWeight: '600',
  margin: '0 0 10px',
  textAlign: 'center' as const,
};

const featureBlock = {
  margin: '40px 0',
  textAlign: 'center' as const,
};

const featureText = {
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const appScreenshot = {
  borderRadius: '12px',
  margin: '0 auto',
};

const promoSection = {
  backgroundColor: '#f8fafc',
  padding: '30px 20px',
  borderRadius: '8px',
  margin: '30px 0',
};

const creditsSection = {
  padding: '30px 20px',
  margin: '30px 0',
  backgroundColor: '#1a2b4b',
  borderRadius: '8px',
  color: '#ffffff',
};

const paragraph = {
  color: 'inherit',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 20px',
};

const appStoreSection = {
  margin: '40px 0',
};

const appStoreButton = {
  display: 'inline-block',
  margin: '0 10px',
};

const footer = {
  textAlign: 'center' as const,
  padding: '30px 0',
  borderTop: '1px solid #e2e8f0',
};

const footerText = {
  color: '#4a5568',
  fontSize: '16px',
  margin: '0 0 20px',
};

const socialLinks = {
  margin: '20px 0 0',
};

const socialIconColumn = {
  textAlign: 'center' as const,
  padding: '0 5px',
};

const socialLink = {
  color: '#1a2b4b',
  fontSize: '24px',
  textDecoration: 'none',
};

export default SmartPlayLaunchEmail;

