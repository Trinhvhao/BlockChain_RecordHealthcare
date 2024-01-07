// src/components/About.js
import React from "react";
import Hero from "../components/Hero";
import "../assets/HomePage.css";
import CountUp from "react-countup";
const HomePage = () => {
  return (
    <div>
      <div className="white-gradient"></div>
      <Hero />
      <div className="container mt-4 ">
        <div className="title" style={{ maxWidth: 450 }}>
          <h2 className="pt-5">Know what healthcare is up against.</h2>
          <div className="des">
            <p className="text-center m-auto">
              Here’s a preview of some of the new cybersecurity data uncovered
              by this year’s DBIR.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={83} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </h2>
                <p className="card-text">
                  of breaches involved external actors—with the majority being
                  financially motivated.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={74} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </h2>
                <p className="card-text">
                  of breaches involved the human element, which includes social
                  engineering attacks, errors or misuse.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h2 style={{ display: "flex", alignItems: "center" }}>
                  <CountUp start={0} end={50} duration={15}></CountUp>
                  <span style={{ marginLeft: "4px" }}>%</span>
                </h2>
                <p className="card-text">
                  of all social engineering attacks are pretexting
                  incidents—nearly double last year’s total.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="first-content container mt-5">
        <div className="title" style={{ maxWidth: 450 }}>
          <h2 className="pt-5">Why choose Blockchain for Healthcare</h2>
          <div className="des">
            <p className="text-center m-auto">
              These assessments reflect the potential of blockchain in enhancing
              healthcare from the perspectives of safety, efficiency, and data
              management
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/256/1835/1835982.png"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/f1e714aece/ce852e16512bd6e094f1.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/00dcdafa20/d87ff218f8f01d7b05ef.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/e08d473729/2e2d4d86b07e272f0e17.svg"
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
          </div>
          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/6bdaecb105/f311159a2781a3cfdfce.svg"
                alt=""
                loading="lazy"
                width="48"
                height="48"
                className="img-fluid mb-3"
              />
              <h3>Safe Data Sharing</h3>
              <p>
                Patients can securely and selectively share their health
                information. Doctors and healthcare professionals can access
                necessary information without concerns about privacy breaches.
              </p>
            </a>
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-4 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>

          <div className="col-md-5 m-3 card-content">
            <a
              href="https://pdf.sciencedirectassets.com/777267/1-s2.0-S2666603020X00030/1-s2.0-S266660302100021X/main.pdf?X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLWVhc3QtMSJHMEUCIDyeuG9%2FupYVVFBBzQcZkBAFekAaMOyhbR0XBBF5fcVeAiEAm%2FI9qJE57zXqkx7P7Eo4rqyOmqKYW9swIB3SncC1qvIqvAUIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAFGgwwNTkwMDM1NDY4NjUiDGtdB7dvmLfUxXVzwyqQBYTD3jIQ3iijlklZGC%2BRQMyd8%2FM05Vo8qSGV62xKmlQZzuB7rwi0mLZcq0dNw83VtDtSK68x%2FdyUNjGOPUG6%2FWwtrP4NT1g1cxppvaT35sqkXDK5F2kXhm%2FusNPnu94gEQuXrwWHu2UGO9wZbJwftTpH9aawkvox7va5%2FEz7FRH1jP5U%2BB1np6uDVPEoxBdpD6wMKjM0BHQWAU%2BAQ4IdMF%2FZex3EUWxOrChCB1I%2FL1X2OQISV%2Fa4TjzygRr0Y5y%2BA4NZwX%2FjenDDdzub8DD5LLRyBYpv4R%2BhFdJq5jjrp0sDBthun8MCU2Ub9yM5JqZXd4QU2tZhLFoFY%2Bte1a2lhBG1G7UxMVErrI6l7NFuCQqbBvXofgXvkiRLNZ0hm%2B95stQfSXXEf0iQ5uFfFGROoKNwfjFbgMdzkZXSi4tP2WaWSjBZCPW6ukJekIgD72d6zliv4WrnQcfj98SbCr%2FSsDtZ5bFOK9LfeGAdjqqe7%2FuWaRnqI9l7C9FJbRe3AG97WjowxraTMCyZcXCUqgtVOtjkBC2oT0X7oRiy11M1LlgkktlPO2kl4QnEOMiTQRlBpS%2BHLmj5LcFAdH6Pw8TDvavitV4PU7tmpu7VyMkpbEOb2yiBq5RvLYViB3q54fBzDW5cQnAIeNWfb%2FA6HNMQz01cWpzPuart5n%2BuHBqS81iDjp3RzZGyTgebQ8P1Kf9RK0MCwR%2FfC8Pev5DVeSEz2q3omOVVVMlrANUfqJemcUKU5ZfmnQs1gnFqNvuEbU%2F001%2FwaKZYEFdOBGwTrKXgWDLSsSlM3LMeLgONqRnZ5xjqlGh4bdDi3lmP5ciojq2z%2FFS7TaTlEMwwa5iqg9wD1kKUxibDLXsdDXyv1xi4CQN2ML6O66wGOrEBOgF7G2zfE3uHmjwRRn69r4dqCSWO43sc0g2JzmwqAnUEobewa0dXCTQiQr4ai%2FrtvMptZSVuw2NAuOtoQvozLwwVpfbWXUuWtzMK6MApefLs1bRwdUM1lPWlhozfOkSS7d5Ty9voAd3TLnKBOvQP6De10%2BvhfgRqE548LLAIuc4aOVHVixQ3Tkz8%2BLBxgmoudtjUJTt0KORs6hUGbOQgHj%2FLhVk%2FX8yi2o8h7GoiNGU3&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240107T164318Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAQ3PHCVTYXTGAQDFS%2F20240107%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f37ad017ce537125467c123125f9147b257c16a7e72e5ae7ec511b29ac98bd9&hash=4bbae398377fcbb9a57c54f42335c859b33d78b3e2b17cd87ef11800adab6e9f&host=68042c943591013ac2b2430a89b270f6af2c76d8dfd086a07176afe7c76c2c61&pii=S266660302100021X&tid=spdf-74dc59b2-9b54-4b4d-9e9b-62ea2741258e&sid=a33d7c918a0a3444fb28be141fd93f1a10e3gxrqa&type=client&tsoh=d3d3LnNjaWVuY2VkaXJlY3QuY29t&ua=0c085b5b520b0159040657&rr=841da8af0c99044a&cc=vn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://s.smallpdf.com/static/cms/f/102628/48x48/9e118280aa/0b1d8a20e389c1be66e8.svg"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
