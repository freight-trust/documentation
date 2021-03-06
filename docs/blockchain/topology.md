# 

Geographic Distribution

# Network Timing

NTP instead of Chrony

<div class="note">

Chrony is by default the standard network time communications protocol
in most modern linux distros.

</div>

NTP Configuration

<div class="informalexample">

$ sudo yum -y install ntp || true $ sudo apt-get --assume-yes install
ntp || true

sudo sed -i '/^server/d' /etc/ntp.conf sudo tee -a /etc/ntp.conf \<\<
EOF server time1.google.com iburst server time2.google.com iburst server
time3.google.com iburst server time4.google.com iburst EOF

sudo systemctl restart ntp &\> /dev/null || true sudo systemctl restart
ntpd &\> /dev/null || true sudo service ntp restart &\> /dev/null ||
true sudo service ntpd restart &\> /dev/null || true sudo restart ntp
&\> /dev/null || true sudo restart ntpd &\> /dev/null || true ntpq -p

</div>

# Network Infrastructure

\[\[Security Audit and Remidation underway\]\]

# Network Mapping

| Protocol   | Port       |
| ---------- | ---------- |
| TCP        | 30303/5    |
| UDP        | 30303/5    |
| Metrics    | 9545       |
| Websocket  | 30305/8546 |
| RPC        | 8545       |
| GraphQL    | 8547       |
| prometheus | 90909/tcp  |
| IPFS       | 4001/tcp   |
| IPFS       | 5001/api   |
| IPFS.      | 8080/tcp   |
