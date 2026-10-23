# Relay

Relay is a circle-based networking app. Instead of broadcasting to a global feed, you post to the people you've actually connected with — and a post can travel one hop beyond them, reaching friends of friends without exposing your whole network.

---

## Core concepts

**Posts** — Everything in Relay is one of four kinds:

| Kind | Use it for |
| --- | --- |
| **Ask** | You need something — a ride, a textbook, help with a problem |
| **Offer** | You have something to give, sell, or lend |
| **Notice** | Information worth passing along |
| **Event** | Something happening at a time and place |

**Circle** — Your personal network. You build it by exchanging connection codes with other accounts, not by searching for strangers.

**Relaying** — A post made to your Circle can be passed one additional hop by a direct connection. That means your connections' connections can see it, but it stops there. Posts made to a group do not relay.

---

## Using Relay

### Publishing a post

1. Open the **Feed**
2. Tap **+**
3. Choose **Ask**, **Offer**, **Notice**, or **Event**
4. Fill in the details and **publish**

### Responding to a post

Open any post in the feed to respond to it. Each post also has a menu with **report** and **block** options.

### Building your Circle

1. Go to **Circle**
2. Share your connection code, or enter someone else's
3. The other account accepts the request

Once accepted, you're directly connected, and your Circle posts become relayable through that person.

### Reach at a glance

```
You ──► your Circle ──► their direct connections
                             (relay stops here)

You ──► a group  ──X  no relay
```

---

## Safety

Any post menu gives you **report** and **block**.

To manage blocks, go to **Profile → Account & safety → Blocked accounts**. You can unblock an account from there.

> **Note:** Unblocking does not restore a removed connection. If you want to be connected again, one of you has to send a new connection request through the normal request/accept flow.

---

## Setup

<!-- TODO: fill in for submission -->

```bash
# install dependencies
# run the app
```

---

## Project status

Final project — in development.
