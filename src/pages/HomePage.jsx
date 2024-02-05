// src/components/About.js
import React from "react";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import CountUp from "react-countup";
import Accordion  from "../components/Accordion";
import {
  Container0,
  Container1,
  SecondContent,
  ThirdContent,
  Title,
  New,
  HeroContent,
  HeroImage,
  FirstContent,
  CardContent,
  H2,
  CardBody,
  Banner,
  BannerBody, BannerContent, BannerButton
} from "../assets/HomePage.styles";
const HomePage = () => {
  return (
    <div>
      {/* <div className="white-gradient"></div> */}
      <Hero />
      <Container0 className="container mt-4">
        <Title>
          <H2 className=" pt-5">Know what healthcare is up against.</H2>
          <p className="text-center m-auto">
            Here’s a preview of some of the new cybersecurity data uncovered by
            this year’s DBIR.
          </p>
        </Title>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-md-4">
            <div className="card mb-4">
              <CardBody className="card-body">
                <H2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={83} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </H2>
                <p className="card-text">
                  of breaches involved external actors—with the majority being
                  financially motivated.
                </p>
              </CardBody>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <CardBody className="card-body">
                <H2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={74} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </H2>
                <p className="card-text">
                  of breaches involved the human element, which includes social
                  engineering attacks, errors or misuse.
                </p>
              </CardBody>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <CardBody className="card-body">
                <H2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={50} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </H2>
                <p className="card-text">
                  of all social engineering attacks are pretexting
                  incidents—nearly double last year’s total.
                </p>
              </CardBody>
            </div>
          </div>
        </div>
      </Container0>
      <New>
        <Container1>
          <HeroContent className=" col-xl-6 col-md-12 col-12">
            <H2>Risks in the healthcare industry</H2>
            <div className="cube-loader">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span style={{ "--i": 0 }} className="cube-span"></span>
                <span style={{ "--i": 1 }} className="cube-span"></span>
                <span style={{ "--i": 2 }} className="cube-span"></span>
                <span style={{ "--i": 3 }} className="cube-span"></span>
              </div>
            </div>
            <p>
              The healthcare industry is fraught with various risks that impact
              the efficiency, security, and quality of patient care. These risks
              pose challenges to healthcare organizations, necessitating a
              proactive approach to mitigate potential issues.
            </p>
            <button className="hero-button">Learn more</button>
          </HeroContent>
          <HeroImage className=" col-xl-6 col-md-12 col-12">
            <img
              src="https://knowledge.medicusit.com/hs-fs/hubfs/HealthcareBreach-1.jpeg?width=2475&name=HealthcareBreach-1.jpeg"
              alt=""
            />
          </HeroImage>
        </Container1>
        <SecondContent>
          <Container1>
            <HeroImage className="col-xl-6 col-md-12 col-12">
              <img
                src="https://www.logsign.com/uploads/data_breachs_in_2019_9d19d62e96.jpg"
                alt=""
              />
            </HeroImage>
            <HeroContent className="col-xl-6 col-md-12 col-12">
              <H2>Data Security Concerns</H2>
              <p>
                One of the foremost challenges in healthcare is the
                vulnerability of patient data. With the increasing digitization
                of medical records and sensitive information, healthcare
                organizations face a constant threat of data breaches. The
                compromise of patient data not only jeopardizes individual
                privacy but also undermines the trust in healthcare systems.
              </p>
            </HeroContent>
          </Container1>
        </SecondContent>
        <ThirdContent>
          <Container1>
            <HeroContent className=" col-xl-6 col-md-12 col-12">
              <H2>Centralized Data Management Risks</H2>
              <p>
                The centralized storage of healthcare data poses inherent risks.
                A single point of failure can lead to catastrophic data loss,
                and the susceptibility to cyberattacks on centralized systems is
                a persistent concern. Downtime or security breaches in such
                centralized setups can disrupt healthcare services and
                compromise patient care.
              </p>
            </HeroContent>
            <HeroImage className=" col-xl-6 col-md-12 col-12">
              <img
                src="https://www.datasciencecentral.com/wp-content/uploads/2022/04/AdobeStock_407673910.jpg"
                alt=""
              />
            </HeroImage>
          </Container1>
        </ThirdContent>
        <SecondContent>
          <Container1>
            <HeroImage className=" col-xl-6 col-md-12 col-12">
              <img
                src="https://th.bing.com/th/id/R.7151a8859e1c52b2043bb1ca6c130de8?rik=UNYXV3a%2b3RWRUA&riu=http%3a%2f%2fi.cbc.ca%2f1.2503786.1390240859!%2fcpImage%2fhttpImage%2fimage.jpg_gen%2fderivatives%2f16x9_1180%2fhospital-wait-times.jpg&ehk=OkY0bSJrl4mNNCYHTajtFwXeYhTM%2baLvW%2fbfVXIM%2fS8%3d&risl=&pid=ImgRaw&r=0"
                alt=""
              />
            </HeroImage>

            <HeroContent className="col-xl-6 col-md-12 col-12">
              <H2>Patient Wait Times</H2>
              <p>
                Long patient wait times for appointments, diagnostic tests, or
                surgical procedures can negatively impact patient satisfaction
                and outcomes. Delays in accessing healthcare services can lead
                to the progression of illnesses, reduced treatment
                effectiveness, and decreased overall patient well-being.
              </p>
            </HeroContent>
          </Container1>
        </SecondContent>
        
        <ThirdContent>
          <Container1>
            <HeroContent className=" col-xl-6 col-md-12 col-12">
              <H2>Arising costs and financial management</H2>
              <p>
                Expenses incurred outside of primary treatment, such as
                transportation fees, hospital accommodation, and other expenses,
                may increase dramatically. Lack of financial management skills
                in functional organizations can lead to waste and unnecessary
                costs.
              </p>
            </HeroContent>
            <HeroImage className=" col-xl-6 col-md-12 col-12">
              <img
                src="https://i.pinimg.com/564x/69/58/7b/69587b77ca7d54c8a457395ef9db9609.jpg"
                alt=""
              />
            </HeroImage>
          </Container1>
        </ThirdContent>
      </New>
      <FirstContent className="container mt-5">
        <Title style={{ maxWidth: 450 }}>
          <H2 className="pt-5">Why choose Blockchain for Healthcare</H2>
          <div className="des">
            <p className="text-center m-auto">
              These assessments reflect the potential of blockchain in enhancing
              healthcare from the perspectives of safety, efficiency, and data
              management
            </p>
          </div>
        </Title>
        <div className="row" style={{ justifyContent: "center" }}>
          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/1171/1171570.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Data Security</h3>
              <p>
                Blockchain utilizes cryptographic technology to safeguard the
                personal information of patients. Transactions are encrypted and
                verified, preventing unauthorized alterations.
              </p>
            </a>
          </CardContent>
          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/12350/12350634.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Immutable Data</h3>
              <p>
                Once data is added to the blockchain, it becomes tamper-proof
                and cannot be altered or deleted without consensus from relevant
                parties. This ensures the accuracy and transparency of
                information.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/9767/9767287.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Access Control</h3>
              <p>
                Blockchain allows for secure and transparent management of
                access rights. Patients and healthcare professionals can be
                granted access only to necessary information.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/9052/9052120.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Secure Data Sharing</h3>
              <p>
                Patients can safely and selectively share their health
                information. Doctors and healthcare experts can access necessary
                information without concerns about privacy breaches.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/13728/13728259.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Integration of Data from Multiple Sources</h3>
              <p>
                Blockchain can integrate data from various sources, including
                hospitals, clinics, and laboratories. This helps create a
                comprehensive health record for the patient.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/12453/12453609.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Easy Retrieval of Health History</h3>
              <p>
                The blockchain system allows for easy retrieval and viewing of a
                patient's health history from anywhere, providing accurate and
                quick information in emergency situations.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/10087/10087601.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Time and Cost Savings</h3>
              <p>
                Verification of information and data access processes are
                expedited, minimizing procedures and costs associated with
                processing and storing health information.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/11094/11094158.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Regulatory Compliance</h3>
              <p>
                Blockchain can assist in automating compliance with healthcare
                regulations and standards, reducing the risk of violations and
                legal issues.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/970/970275.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Facilitating Clinical Trials</h3>
              <p>
                Blockchain is used in clinical trials to address issues of false
                results and data fragmentation, enhancing trust in the research
                process.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/11176/11176250.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3> Information Display</h3>
              <p>
                The blockchain system can display information about the origins
                of medication, ensuring quality and authenticity. It offers
                better security for sensitive data, particularly when
                appropriately implemented.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-4">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/12167/12167749.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Improves safety</h3>
              <p>
                Blockchain enhances overall safety in patient treatment by
                addressing issues of medication validity and drug traceability.
                It centralizes all data, allowing for easy and secure access to
                detailed medical records.
              </p>
            </a>
          </CardContent>

          <CardContent className="col-md-5 m-3">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/12250/12250647.png"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Minimise data transformation time and cost</h3>
              <p>
                Blockchain networks reduce data transformation time and costs,
                promising fast and effective verification of medical
                credentials. Implementation of blockchain can lead to valuable
                and privacy-respecting monetized data sharing networks.
              </p>
            </a>
          </CardContent>
        </div>
      </FirstContent>
      <div className="row">
      <Banner>
      <BannerBody>
        <BannerContent>
          <H2 style={{fontSize:"3vw"}}>Blockchain video for Healthcare</H2>
          <span>Start building engaging Social Posts today, and share them with
            eager audiences in minutes.
            </span>
          
        </BannerContent>
        <BannerButton className="btn">
          <span>Get Started</span>
          
        </BannerButton>
      </BannerBody>
    </Banner>
    </div>
    <div>
      <div className="header mx-auto w-2/3">
        <H2 className="text-center">More information about Blockchain in Healthcare</H2>
      </div>
    <div className="p-4 w-9/12 bg-white border-double border-4 border-y-sky-300 rounded-xl mx-auto mb-5">
      <Accordion title="What is Blockchain?" answer="Blockchain is a technology that stores and transmits information in a secure, transparent and immutable way. It operates as an encrypted distributed database system. The outstanding feature of blockchain is that data is stored in blocks, each block containing information about specific transactions or events. Each block connects to the previous block through a process called hashing, forming an immutable chain." />
      <Accordion
        title="How can blockchain help improve medical data management?"
        answer="
        Blockchain employs robust encryption and sophisticated authentication mechanisms to safeguard medical data. Each block of data is encrypted and linked to previous blocks, forming an immutable chain that allows updates only by adding new blocks. Thus, medical data on the blockchain is shielded from unauthorized access and alterations. Additionally, blockchain fosters transparency in medical data management by recording every transaction and change, ensuring all parties can review and verify activity history. Users retain complete control over their medical data through public and private keys, managing access securely. Furthermore, utilizing blockchain in medical data management reduces reliance on intermediaries, cutting transaction costs and streamlining data access, ultimately saving time and resources."
      />
      <Accordion
        title="Is medical data stored on blockchain safe?"
        answer="it provides a secure, transparent, and immutable system for storing and sharing medical data. With this technology, medical records can be encrypted and stored on data blocks, each block linked to the previous block using encryption. This helps prevent unauthorized modifications and protects data integrity. In addition, blockchain transparency helps improve the authentication and distribution process of medical information, helping to reduce dependence on intermediaries and increasing transparency in data sharing between medical institutions. healthcare and patients. Blockchain can also help enhance security and manage access to medical data, helping users control and protect their personal information safely and effectively. These benefits of blockchain offer great potential for improving the quality and efficiency of healthcare services, while enhancing patient satisfaction and trust in the healthcare system."
      />
      <Accordion
        title="Is Blockchain suitable for all types of medical data??"
        answer=": Blockchain có thể được áp dụng cho nhiều loại dữ liệu y tế, bao gồm lịch sử bệnh án, kết quả xét nghiệm, hồ sơ vắc xin và thông tin nhà thuốc. Tuy nhiên, việc áp dụng cần được xem xét kỹ lưỡng để đảm bảo tính bảo mật và tính khả thi của hệ thống.."
      />
    </div>
    </div>
    <div>
      <footer><Footer></Footer></footer>
   
    </div>
    </div>
  );
};

export default HomePage;
