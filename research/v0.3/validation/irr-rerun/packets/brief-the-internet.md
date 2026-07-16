# Blind IRR Rating Packet — the-internet

**id:** the-internet
**name:** The Internet
**category:** infrastructure

## Exemplars

- **id:** the-internet
  **name:** The Internet (the singular global system)
  **note:** Singleton class — there is exactly one Internet. Per
  instance_population below, this is an epistemic constraint on
  what can be claimed at "class level," not a missing datum: every
  quantitative row in this entry is a single-instance time-series
  measurement (one system observed at different dates: n=10,697 ASes
  in 2001, ~75,000-83,739 in 2025), never a sample drawn from a
  population of comparable systems.

## Scoping note

> The system is the global interconnection of Autonomous Systems (ASes)
> running the TCP/IP protocol suite: the routing/topology layer (BGP
> peering among ASes), the physical transport layer (routers, links,
> submarine and terrestrial cables) it rides on, and the traffic it
> carries. Inside the boundary: ASes, routers, links, and the packets/
> flows/BGP updates that constitute inter-AS and intra-AS dynamics.
> Outside: end-user application content and behavior (treated as load/
> forcing on the network), the human institutions that govern naming and
> standards (IANA/ICANN/IETF — recorded only as coordination points under
> decentralization, not modeled as internal dynamical components), and
> end-user hardware (phones, PCs, IoT devices — counted under numerosity
> as an adjacent population, not the network's dynamical atoms).
> Atomicity per filling_rules.atomicity-convention: this entry declares a
> DUAL atomicity, stated explicitly per column because the network-
> structure columns and the traffic/physical-structure columns
> characteristically operate at different levels — (1) Autonomous
> Systems (AS-level nodes) are the atoms for network-structure columns
> (degree_distribution, modularity, hierarchy_depth, decentralization)
> because BGP routing policy and peering — the system's characteristic
> topological dynamics — operate at the AS level, not at the level of
> individual routers, hosts, or packets; (2) packets/flows are the
> relevant unit for traffic-dynamics columns (temporal_correlation) where
> self-similarity is a property of the traffic signal, not the AS graph.
> This dual-atomicity choice is itself a datum about the system (a
> network is genuinely bi-layered — topology substrate vs. traffic
> process — in a way a hurricane's single-fluid continuum is not) and is
> flagged per column below rather than collapsed into one figure.
> Scoring is class-general throughout (no named sub-instance sits below
> "the Internet" itself — see instance_population).
