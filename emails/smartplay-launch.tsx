import { Body, Container, Column, Head, Heading, Html, Img, Preview, Row, Section, Text } from "@react-email/components"

interface SmartPlayEmailProps {
  userName?: string
}

export const SmartPlayEmail = ({ userName = "[User's First Name]" }: SmartPlayEmailProps) => {
    const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

  return (
    <Html>
      <Head />
      <Preview>Sneak Peek! SmartB's SmartPlay Fantasy Sports Platform is Coming Together.</Preview>
      <Body style={main}>
        {/* Header with logo */}
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
               src={`${baseUrl}/static/smart-play-logo.svg`}
               width="50%"
               height="100%"
               alt="Notion's Logo"
               style={logo}
            />
          </Section>

          {/* Hero section */}
          <Section style={heroSection}>
            <Heading style={heroHeading}>
              EVERYTHING <span style={highlightText}>FANTASY</span> SPORTS.
              <br />
              ALL IN ONE PLACE!
            </Heading>
          </Section>

          {/* Greeting and intro */}
          <Section style={section}>
            <Text style={greeting}>Hi {userName},</Text>
            <Text style={paragraph}>
              We're thrilled to share an update on the <strong style={brandText}>SmartB's</strong> fantasy sports
              platform! Things are moving full steam ahead, and we're all set to launch later on{" "}
              <strong>15th of Dec 2024</strong>.
            </Text>
          </Section>

          {/* Sports icons */}
          <Section style={sportsIconsSection}>
            <Row>
              {["CRICKET", "IPL", "NFL", "SOCCER", "NBA", "MLB", "NHL"].map((sport, index) => (
                <Column key={index} style={iconColumn}>
                  <div style={iconCircle}></div>
                  <Text style={iconText}>{sport}</Text>
                </Column>
              ))}
            </Row>
          </Section>

          {/* App preview section */}
          <Section style={section}>
            <Text style={sectionTitle}>
              As promised, here's a first look at the app and how you'll create your fantasy teams:
            </Text>
          </Section>

          {/* App screenshot */}
          <Section style={appPreviewSection}>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
              width="250"
              height="auto"
              alt="App Preview"
              style={appScreenshot}
            />
          </Section>

          {/* Feature sections */}
          <Section style={featureSection}>
            <Heading style={featureHeading}>Pick a game</Heading>
            <Text style={featureText}>Choose games from all major sports leagues including:</Text>
            <Row style={screenshotRow}>
              <Column>
                <Img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
                  width="200"
                  height="auto"
                  alt="Pick a game screenshot"
                  style={featureScreenshot}
                />
              </Column>
              <Column>
                <Img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
                  width="200"
                  height="auto"
                  alt="Pick a game screenshot"
                  style={featureScreenshot}
                />
              </Column>
            </Row>
          </Section>

          <Section style={dividerSection}>
            <div style={divider}></div>
          </Section>

          <Section style={featureSection}>
            <Heading style={featureHeading}>Build Your team</Heading>
            <Text style={featureText}>Draft a balanced roster of your favorite players in various positions.</Text>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
              width="250"
              height="auto"
              alt="Build team screenshot"
              style={featureScreenshot}
            />
          </Section>

          <Section style={dividerSection}>
            <div style={divider}></div>
          </Section>

          <Section style={featureSection}>
            <Heading style={featureHeading}>Compete and win!</Heading>
            <Text style={featureText}>Watch your fantasy team compete as the real-world match unfolds.</Text>
          </Section>

          {/* Marketing copy */}
          <Section style={section}>
            <Text style={marketingCopy}>
              Imagine building your dream lineup from the world's top cricket and football stars! You'll be able to pick
              your players, lock in your team, and compete with friends to become the ultimate{" "}
              <strong style={brandText}>SmartPlay</strong> Fantasy Sports Platform!
            </Text>
          </Section>

          {/* Launch info */}
          <Section style={launchSection}>
            <Text style={launchText}>
              Plus, we're excited to announce that the platform will kick off with cricket just in time for the upcoming
              season!
            </Text>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
              width="300"
              height="auto"
              alt="Cricket player"
              style={sportImage}
            />
          </Section>

          {/* Free coins promo */}
          <Section style={section}>
            <Text style={paragraph}>
              Thank you for being an early supporter. Your <strong>500 free coins</strong> will be waiting in your
              account at launch, ready for you to jump in and experience SmartB's unique fantasy sport experience!
            </Text>
            <Text style={paragraph}>
              We'll keep you posted as we approach the final stages. Until then, don't miss out on{" "}
              <strong style={brandText}>SmartB's</strong> news, fixtures, results, and expert tips with our SOC tool and
              stay ahead of the competition while enjoying <strong style={brandText}>SmartB's</strong> free member
              benefits until we are ready to go live with <strong style={brandText}>SmartB's SmartPlay</strong>!
            </Text>
          </Section>

          {/* Sign off */}
          <Section style={section}>
            <Text style={signOff}>
              Catch you soon,
              <br />
              The <strong style={brandText}>SmartB's</strong> Team
            </Text>
          </Section>

          {/* Banner */}
          <Section style={bannerSection}>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
              width="500"
              height="auto"
              alt="Get the odds"
              style={banner}
            />
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Row style={socialRow}>
              {["fb", "twitter", "instagram", "youtube", "tiktok", "linkedin", "whatsapp"].map((social, index) => (
                <Column key={index} style={socialColumn}>
                  <div style={socialIcon}></div>
                </Column>
              ))}
            </Row>
            <Text style={footerText}>
              support@smartplay.com
              <br />
              www.smartplay.com
              <br />© 2024 SmartPlay. All rights reserved.
            </Text>
            <Row style={appStoreRow}>
              <Column>
                <Img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
                  width="120"
                  height="auto"
                  alt="App Store"
                  style={appStoreButton}
                />
              </Column>
              <Column>
                <Img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png"
                  width="120"
                  height="auto"
                  alt="Google Play"
                  style={appStoreButton}
                />
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default SmartPlayEmail

// Styles
const main = {
  backgroundColor: "#FFFFFF",
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  color: "#000000",
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  width: "100%",
  maxWidth: "600px",
}

const logoContainer = {
  padding: "20px 0",
  textAlign: "center" as const,
}

const logo = {
  margin: "0 auto",
}

const heroSection = {
  backgroundColor: "#0a2e5c",
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Subject%20Sneak%20Peek%21%20SmartB%E2%80%99s%20SmartPlay%20Fantasy%20Sports%20Platform%20is%20Coming%20Together-ci3JGQruNzkfbOAfdvEoxsNJLbsGZ0.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "40px 20px",
  textAlign: "center" as const,
}

const heroHeading = {
  fontSize: "28px",
  fontWeight: "bold",
  lineHeight: "32px",
  margin: "0",
  color: "#ffffff",
  textAlign: "center" as const,
}

const highlightText = {
  color: "#ff5722",
}

const brandText = {
  color: "#ff5722",
}

const section = {
  padding: "20px",
}

const greeting = {
  fontSize: "18px",
  lineHeight: "24px",
  margin: "0 0 10px 0",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px 0",
}

const sportsIconsSection = {
  backgroundColor: "#0a2e5c",
  padding: "10px 20px",
  textAlign: "center" as const,
}

const iconColumn = {
  display: "inline-block",
  width: "14%",
  textAlign: "center" as const,
}

const iconCircle = {
  width: "30px",
  height: "30px",
  borderRadius: "50%",
  backgroundColor: "#ff5722",
  margin: "0 auto 5px",
}

const iconText = {
  fontSize: "10px",
  margin: "0",
  textAlign: "center" as const,
}

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const appPreviewSection = {
  textAlign: "center" as const,
  padding: "0 20px 20px",
}

const appScreenshot = {
  margin: "0 auto",
  borderRadius: "10px",
  border: "1px solid #1a3f6d",
}

const featureSection = {
  padding: "20px",
  textAlign: "center" as const,
}

const featureHeading = {
  fontSize: "22px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
  color: "#ffffff",
  textAlign: "center" as const,
}

const featureText = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const screenshotRow = {
  textAlign: "center" as const,
}

const featureScreenshot = {
  margin: "0 auto",
  borderRadius: "10px",
  border: "1px solid #1a3f6d",
}

const dividerSection = {
  padding: "10px 0",
  textAlign: "center" as const,
}

const divider = {
  width: "50px",
  height: "5px",
  margin: "0 auto",
  backgroundColor: "#ff5722",
  borderRadius: "5px",
}

const marketingCopy = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px 0",
  textAlign: "center" as const,
}

const launchSection = {
  backgroundColor: "#ff5722",
  padding: "20px",
  textAlign: "center" as const,
  borderRadius: "10px",
  margin: "0 20px 20px",
}

const launchText = {
  fontSize: "18px",
  fontWeight: "bold",
  lineHeight: "24px",
  margin: "0 0 20px 0",
  color: "#ffffff",
  textAlign: "center" as const,
}

const sportImage = {
  margin: "0 auto",
  borderRadius: "10px",
}

const signOff = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "30px 0 20px 0",
}

const bannerSection = {
  padding: "20px",
  textAlign: "center" as const,
  backgroundColor: "#0a2e5c",
}

const banner = {
  margin: "0 auto",
  borderRadius: "10px",
}

const footer = {
  padding: "20px",
  textAlign: "center" as const,
  backgroundColor: "#072548",
  borderRadius: "10px 10px 0 0",
}

const socialRow = {
  textAlign: "center" as const,
  margin: "0 0 20px 0",
}

const socialColumn = {
  display: "inline-block",
  width: "14%",
  textAlign: "center" as const,
}

const socialIcon = {
  width: "24px",
  height: "24px",
  borderRadius: "50%",
  backgroundColor: "#ffffff",
  margin: "0 auto",
}

const footerText = {
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 20px 0",
  color: "#cccccc",
  textAlign: "center" as const,
}

const appStoreRow = {
  textAlign: "center" as const,
}

const appStoreButton = {
  margin: "0 5px",
}

