# Guiding Principles

These Guiding Principles are meant to help maintainers take decisions
for the project instead of relying on the project creator. It is a framework
to help you decide what's the vision for the project and whether your
decision aligns with that vision.

1. Be accessible to everyone. This includes using open standards, but also publishing datasets,
   focusing on accessibility, and having a clean HTML for search engines.
1. Do not be a gatekeeper to good events.
1. Be a good citizen of the web (scrape nicely) and the blr-events ecosystem. Be open to collaboration and syndication etc.
1. Be strict about bad events and hosts. Look at reviews, ask friends for feedback, attend the event yourselves - try to not list anything that you wouldn't recommend to your own friends.
1. [Woo-woo](https://rationalwiki.org/wiki/Woo-woo) events are not welcome on blr.today. It can be somewhat fuzzy sometimes, but testing for an actual certified medical practioner is a good filter usually. Physical Yoga is usually fine, but avoid cults.
1. Acknowledge your own bias in curation. For eg, we track Sports Screenings (in very high detail) despite me not caring about any sports.
1. Understand the [core thesis](https://blr.today/about/) behind the project.

---

# Code of Conduct

## Scope

This code of conduct applies to on-topic development channels of the entire
blr.today project. This includes but is not limited to:

- Bug trackers
- Development repositories
- Mailing lists
- Non-development platforms if misbehaviour is also applicable to development channels
- Any other communication method for development of software

## Standards of Communication

We expect all users to stay on-topic while using development channels.

We will not accept the following:

- Stalking and witchhunting
- Arguments, and off-topic debates
- Ad hominems
- Attempts to flame, or otherwise derail communication
- Troll feeding

If you see misbehaviour, ignore the person(s) and speak with a moderator or administrator.
You can send a report at <https://captnemo.in/contact/>.

---

# LLM/"AI" Development Policy

This policy applies to all blr.today projects.

## No Direct Communication from LLMs

1. LLM output is **expressly prohibited** for any direct communication, including the following:
    * issues or comments
    * feature requests or comments
    * pull request bodies or comments
    * forum/chat/etc. posts or comments

   In short, if you are posting **any** of those things, the output must be your own words, explanation, description, etc., not a verbatim dump of an LLM's output. We expect you to understand what you're posting. Violating this rule will result in closure/deletion of the offending item(s).

   An exception will be made for **LLM-assisted translations** if you are having trouble accurately conveying your intent in English. Please explicitly note this ("I have translated this from MyLanguage with an LLM") and, if possible, post in your original language as well.
   
2. LLM code contributions are subject to more granularity below, but the general principle is that "pure 'vibe coding' will be rejected" and "you are responsible for what you commit". We will review in that vein. If the **code looks terrible**, it will be **rejected as such**.

## LLM Code Contributions to Official Projects

The following are good guidelines to all code contributions, irrespective of whether
they come from LLMs or not. But these are especially important if you are using AI-assistance
in your contributions:

1. Contributions should be **concise and focused**. If the PR claims to target X, and is also touching unrelated Y and Z, it will be rejected. This includes incidental changes to unrelated functionality, a hallmark of poorly-worded or too-general prompts.
3. You must **review the output** and be able to **explain** in the PR body - **without** LLM output as noted above - **what is being changed and why**. Your PR body (and, if applicable, commit bodies) should be providing context to other developers about why a change was made, and if your name is on it, we want **your** words and explanations, not an LLM's. If **you can't explain** what the LLM did, we are **not interested** in the change.
4. The changes must be **tested**. The code should build and run correctly, or it will be rejected. You should also **explicitly test the functionality being modified**.
5. You must be able and willing to **handle review feedback** and implement the suggested change(s) as required. What this means in practice is, if you do not know what has been changed or why (see #3), and thus can't implement suggested changes or discuss them **yourself**, then we are **not interested** in the change. Just dumping reviewer feedback into an LLM and expecting what comes out to be "good enough", is not.
6. **Features or refactors** require **an in-depth level of understanding** about what is being changed and why. It is obvious when changes are made without the developer making them understanding what is happening. These will be rejected. Please open issues to discuss a new large feature or refactor implementation before filing PRs.
7. The **final discretion always lies with the reviewers**. If your PR is not capable of being reasonably reviewed, for any reason (over-complexity, size, squashed commits, etc.) it will be rejected, and this goes just as much for non-LLM-assisted PRs as it does for LLM-assisted PRs. You will be asked to split such a PR up into multiple PRs that each present a focused, concise set of changes instead.

The golden rule is this: **do not just let an LLM loose on the codebase with a vague vibe prompt and then commit the results as-is**. This is lazy development, will **always** result in a **poor-quality contribution** from our perspective, and we are not at all interested in such slop. **Make an effort** or please do not bother. And again, you are free to use LLMs to **assist** you, but not as the sole source of code changes.

// The LLM policy is adapted from the Ghostty and Jellyfin projects.

---

## Governance

The project governance is still under planning. Please see <https://github.com/orgs/blr-today/discussions/3>.

Please see <HACKING.md> for technical documentation about this project.
