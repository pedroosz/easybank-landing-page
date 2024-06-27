import { ArticleCard } from "@/components/ArticleCard";
import { FeatureCard } from "@/components/FeatureCard";
import ContentSection from "@/components/content-section";
import CtaLink from "@/components/cta-link";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Features section */}
      <ContentSection
        header={
          <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-3xl">Why choose Easybank?</h1>
            <p className="text-sm">
              We leverage Open Banking to turn your bank account into your
              financial hub. Control your finances like never before.
            </p>
          </div>
        }
        content={
          <>
            <FeatureCard.Root
              image={
                <FeatureCard.Image
                  src="/icons/icon-online.svg"
                  alt="Four phones"
                  width={168}
                  height={168}
                />
              }
            >
              <FeatureCard.Title>Online Banking</FeatureCard.Title>
              <FeatureCard.Description>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </FeatureCard.Description>
            </FeatureCard.Root>

            <FeatureCard.Root
              image={
                <FeatureCard.Image
                  src="/icons/icon-budgeting.svg"
                  alt="Four phones"
                  width={168}
                  height={168}
                />
              }
            >
              <FeatureCard.Title>Simple Budgeting</FeatureCard.Title>
              <FeatureCard.Description>
                See exactly where your money goes each month. Receive
                notifications when you’re close to hitting your limits.
              </FeatureCard.Description>
            </FeatureCard.Root>

            <FeatureCard.Root
              image={
                <FeatureCard.Image
                  src="/icons/icon-onboarding.svg"
                  alt="Four phones"
                  width={168}
                  height={168}
                />
              }
            >
              <FeatureCard.Title>Fast Onboarding</FeatureCard.Title>
              <FeatureCard.Description>
                We don’t do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </FeatureCard.Description>
            </FeatureCard.Root>

            <FeatureCard.Root
              image={
                <FeatureCard.Image
                  src="/icons/icon-api.svg"
                  alt="Four phones"
                  width={168}
                  height={168}
                />
              }
            >
              <FeatureCard.Title>Open API</FeatureCard.Title>
              <FeatureCard.Description>
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </FeatureCard.Description>
            </FeatureCard.Root>
          </>
        }
      />

      {/* Latest Articles section */}
      <ContentSection
        header={
          <div className="space-y-4 text-center lg:w-1/2 lg:text-left">
            <h1 className="text-3xl">Why choose Easybank?</h1>
          </div>
        }
        content={
          <>
            <ArticleCard.Root
              image={
                <ArticleCard.Image
                  src="/image-currency.jpg"
                  alt="Four phones"
                  width={800}
                  height={800}
                />
              }
            >
              <ArticleCard.Author name="By John Doe" />
              <ArticleCard.Title>
                Receive money in any currency with no fees
              </ArticleCard.Title>
              <ArticleCard.Description>
                The world is getting smaller and we’re becoming more mobile. So
                why should you be forced to only receive money in a single…
              </ArticleCard.Description>
            </ArticleCard.Root>

            <ArticleCard.Root
              image={
                <ArticleCard.Image
                  src="/image-restaurant.jpg"
                  alt="Four phones"
                  width={800}
                  height={800}
                />
              }
            >
              <ArticleCard.Author name="By Jane Doe" />
              <ArticleCard.Title>
                Treat yourself without worrying about money
              </ArticleCard.Title>
              <ArticleCard.Description>
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. That means you…
              </ArticleCard.Description>
            </ArticleCard.Root>

            <ArticleCard.Root
              image={
                <ArticleCard.Image
                  src="/image-plane.jpg"
                  alt="Four phones"
                  width={800}
                  height={800}
                />
              }
            >
              <ArticleCard.Author name="By John Doe" />
              <ArticleCard.Title>
                Take your Easybank card wherever you go
              </ArticleCard.Title>
              <ArticleCard.Description>
                We want you to enjoy your travels. This is why we don’t charge
                any fees on purchases while you’re abroad. We’ll even show you…
              </ArticleCard.Description>
            </ArticleCard.Root>

            <ArticleCard.Root
              image={
                <ArticleCard.Image
                  src="/image-confetti.jpg"
                  alt="Four phones"
                  width={800}
                  height={800}
                />
              }
            >
              <ArticleCard.Author name="By Jane Doe" />
              <ArticleCard.Title>
                Our invite-only Beta accounts are now live!
              </ArticleCard.Title>
              <ArticleCard.Description>
                After a lot of hard work by the whole team, we’re excited to
                launch our closed beta. It’s easy to request an invite through
                the site...
              </ArticleCard.Description>
            </ArticleCard.Root>
          </>
        }
      />
    </>
  );
}
