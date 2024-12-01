# Partytown 🎉

<img width="838" alt="Partytown github fit 2x" src="https://user-images.githubusercontent.com/452425/134568488-f36f4640-9ada-4a78-a969-2b8315cf7f47.png">

- [Introducing Partytown: Run Third-Party Scripts From a Web Worker](https://dev.to/adamdbradley/introducing-partytown-run-third-party-scripts-from-a-web-worker-2cnp)
- [How Partytown's Sync Communication Works](https://dev.to/adamdbradley/how-partytown-s-sync-communication-works-4244)
- [How we cut 99% of our JavaScript with Qwik + Partytown](https://www.khulnasoft.com/blog/how-we-cut-99-percent-js-with-qwik-and-partytown)
- [Partytown is now in Beta](https://www.khulnasoft.com/blog/partytown-is-now-in-beta)

> A fun location for your third-party scripts to hang out

Partytown is a lazy-loaded library to help relocate resource intensive scripts into a [web worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API), and off of the [main thread](https://developer.mozilla.org/en-US/docs/Glossary/Main_thread). Its goal is to help speed up sites by dedicating the main thread to your code, and offloading third-party scripts to a web worker.

> Note: Partytown is still in beta and not guaranteed to work in every scenario. Please see our [FAQ](https://partytown.khulnasoft.com/faq) and [Trade-Off](https://partytown.khulnasoft.com/trade-offs) sections for more info.

The philosophy is that the main thread should be dedicated to your code, and any scripts that are not required to be in the [critical path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path) should be moved to a web worker. Main thread performance is, without question, more important than web worker thread performance.

- [Getting Started](https://partytown.khulnasoft.com/getting-started)
- [Integrations](https://partytown.khulnasoft.com/integrations)
- [Configuration](https://partytown.khulnasoft.com/configuration)
- [Releases](https://github.com/KhulnaSoft/partytown/releases)
- [FAQs](https://partytown.khulnasoft.com/faq)

![Without Partytown and With Partytown: Your code and third-party code compete for main thread resources](https://user-images.githubusercontent.com/452425/152393346-6f721a4f-3f66-410a-8878-a2b49e24307f.png)

## Community

- [@khulnasoft](https://twitter.com/khulnasoft)
- [@khulnasoft](https://twitter.com/khulnasoft)
- [Local Development](https://github.com/KhulnaSoft/partytown/blob/main/CONTRIBUTING.md#local-development)
- [For Plugin Authors / Developers](https://github.com/KhulnaSoft/partytown/blob/main/CONTRIBUTING.md#plugin-authors-developers)

## Related Projects

- [Qwik](https://github.com/KhulnaSoft/qwik): An open-source framework designed for best possible time to interactive, by focusing on resumability of server-side-rendering of HTML, and fine-grained lazy-loading of code.

<br>
<br>
