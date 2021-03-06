# 

Geographic Distribution

# Network Timing

NTP Configuration

``` bash
$ sudo yum -y install ntp || true
$ sudo apt-get --assume-yes install ntp || true

sudo sed -i '/^server/d' /etc/ntp.conf
sudo tee -a /etc/ntp.conf << EOF
server time1.google.com iburst
server time2.google.com iburst
server time3.google.com iburst
server time4.google.com iburst
EOF

sudo systemctl restart ntp &> /dev/null || true
sudo systemctl restart ntpd &> /dev/null || true
sudo service ntp restart &> /dev/null || true
sudo service ntpd restart &> /dev/null || true
sudo restart ntp &> /dev/null || true
sudo restart ntpd &> /dev/null || true
ntpq -p
```

# Network Infrastructure

\<\<,Kubernetes\>\> \<\<,Helm\>\>

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

## IPFS Cluser

9094 — HTTP API endpoint 9095 — IPFS proxy endpoint 9096 — Cluster
swarm, used for communication between cluster nodes
