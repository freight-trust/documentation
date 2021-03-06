# 

**Topics**

  - Systems development and quality assurance

  - Systems operations

  - JVM Tuning and using specific JDK’s

  - Execution and Contract Behavior

  - Business continuity-disaster recovery planning and resources;

  - Capacity and performance planning;

  - Exogenus Event Planning

  - IT Security

**Fail Safe Mechanism**

Smart contracts may not include appropriate or sufficient backup /
failover mechanisms in case something goes awry.

  - Smart contracts may depend on other systems to fulfill contract
    terms. These other systems may have vulnerabilities that could
    prevent the smart contract from functioning as intended.

  - Some smart contract platforms may be missing critical system
    safeguards and customer protections.

  - Where smart contracts are linked to a blockchain, forks in the chain
    could create operational problems.

  - In case of an operational failure, recourse may be limited or
    non-existent — complete loss of a virtual asset is possible.

  - Poor governance. Smart contracts may require attention, action, and
    possible revision subject to appropriate governance and liability
    mechanisms.
    
      - Low Level Monotiroing of Deployed Contracts (e.g. QuickBlocks)
    
      - Failsafe mechanism to return to us in case of attack or error
    
      - Best Practices
    
      - Auditing by 3rd Party
    
      - Functional Lanaguage Approach to design (e.g. KVM)

FailSafe Switch -

# Active Monitoring

# **Smart Contract Monitoring:**

  - Actively monitor one (or more) Ethereum smart contracts and user
    accounts (or any combination) watching for odd or “known-dangerous”
    transactional patterns. Report to anomalies to a list of email, SMS,
    web site, or individuals whenever something of interest happens.

| End Users: | Smart contract developers, smart contract participants (i.e. token holders)                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Notes:     | “Weird” things include recursive attacks, violations of invariants (token balances to ether balance), largest purchases, most active trader accounts, etc.; Could potentially spawn an “insured” smart contract industry expectation. |

**Smart Contract Reporting:**

  - Instantaneous “Quarterly” reports available every second. On demand
    reports generated for cap tables (report on token holders),
    individual ether holdings and transaction histories (i.e. bank
    statements) on a per-account, per-contract-group, by industry, or
    system wide.

| End Users: | Smart contract developers, smart contract participants (i.e. token holders), economists, regulators                                                                                                                                                        |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Notes:     | Allows for self-reporting on business processes, expenditures, and revenue from outside an organization—​no need to wait for company reports; marketing efforts might engender an expectation that every smart contract’s accounting is fully transparent. |

**Auditing Support:**

Provide data and transactional information to third parties not
associated with the development team of a smart contract system.
Interesting to potential investors, industry analysts, auditors and/or
regulators.

| End Users: | regulators, auditors, potential investors                                                                                                                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Note:      | Fully parsed data makes for much easier auditing of smart contracts, could expose non-delivery of promised behavior (i.e. are “provably true” gambling sites actually paying out at the rate they claim? Gambler Watch™). |

# Benchmarks

The amount of time taken by any processor or task can be termed as
performance, which does not mean clock frequency alone or the number
of instructions executed per clock cycle, but is the combination of
clock frequency and instructions per clock cycle:

P = I \* F where, P = performance, I = instructions executed per clock
cycle and F= frequency

# USE, Utilization, Saturation and Errors.

[source, brendan gregg,
Netflix](http://www.brendangregg.com/usemethod.html)

The USE Method can be summarized as:

For every resource, check utilization, saturation, and errors. It’s
intended to be used early in a performance investigation, to identify
systemic bottlenecks.

Terminology definitions:

  - resource: all physical server functional components (CPUs, disks,
    busses, …​) \[1\]

  - utilization: the average time that the resource was busy servicing
    work \[2\]

  - saturation: the degree to which the resource has extra work which it
    can’t service, often queued

  - errors: the count of error events

The metrics are usually expressed in the following terms:

  - utilization: as a percent over a time interval. eg, "one disk is
    running at 90% utilization".

  - saturation: as a queue length. eg, "the CPUs have an average run
    queue length of four".

  - errors: scalar counts. eg, "this network interface has had fifty
    late collisions".

## Resource List

  - CPUs: sockets, cores, hardware threads (virtual CPUs)

  - utilization, saturation

  - Memory: capacity

  - utilization, saturation

  - Network interfaces

  - utilization

  - Storage devices: I/O, capacity

  - utilization, saturation, errors

  - Controllers: storage, network cards

  - Interconnects: CPUs, memory, I/O

  - JVM

## Java Virtual Machine Tuning

Using Azul Zulu Community

[Zulu Community download
page](https://www.azul.com/downloads/zulu-community/?architecture=x86-64-bit&package=jdk)

SHA256: df0de67998ac0c58b3c9e83c86e2a81daca05dc5adc189d942bc5d3f4691e749
[Download
zulu11.39.15-ca-jdk11.0.7-linux\_x64.tar.gz](https://cdn.azul.com/zulu/bin/zulu11.39.15-ca-jdk11.0.7-linux_x64.tar.gz)
[Certification QA from
Azul](https://cdn.azul.com/zulu/pdf/cert.zulu11.39.15-ca-jdk11.0.7-linux_x64.tar.gz.pdf)

11.0.7+10 Zulu: 11.39.15 Linux glibc v2.5 or higher

\-XX:+UnlockExperimentalVMOptions -XX:+UseZGC

Since in current HotSpot JVM implementation (as well as in some others)
GC logging can be blocked by background IO activities, there are various
solutions that can help mitigate this problem when writing to GC log
file.

First, the JVM implementation could be enhanced to completely address
this issue. Particularly, if the GC logging activities are separated
from the critical JVM GC processes that cause STW pauses, then this
problem will go away. For instance, JVM can put the GC logging function
into a different thread which handles the log file writing
independently, hence not contributing to the STW pauses. Taking the
separate-thread approach however risks losing last GC log information
during JVM crash. It might make sense to expose a JVM flag allowing
users to specify their preference.

Since the extent of STW pauses caused by background IO depends on how
heavy the latter is, various ways to reduce the background IO intensity
can be applied. For instance, de-allocating other IO-intensive
applications on the same node, reducing other types of logging,
improving on the log rotation, etc.

For latency-sensitive applications such as online ones serving
interactive users, large STW pauses (e.g., \>0.25 seconds) are
intolerable. Hence, special treatments need to be applied. The bottom
line of ensuring no big STW pauses induced by OS is to avoid GC logging
being blocked by OS IO activities.

Full Command Line Documentation
[Oracle](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/refman/optionXX.html)
[Refman
PDF](https://docs.oracle.com/cd/E13150_01/jrockit_jvm/jrockit/jrdocs/pdf/refman.pdf)

## Azul Zing 11

[Zing 11, Amazon
Linux 2](https://docs.azul.com/zing/zing11-quick-start-amazon-linux.htm)

# Network Latency Performance

To get maximal throughput it is critical to use optimal TCP send and
receive socket buffer sizes for the link you are using. If the buffers
are too small, the TCP congestion window will never fully open up. If
the receiver buffers are too large, TCP flow control breaks and the
sender can overrun the receiver, which will cause the TCP window to shut
down. This is likely to happen if the sending host is faster than the
receiving host.

  - The optimal buffer size is twice the bandwidth\*delay product of the
    link:

`buffer size = 2 * bandwidth * delay`

For example, if your ping time is 50 ms, and the end-to-end network
consists of all 1G or 10G Ethernet, the TCP buffers should be:

`.05 sec * (1 Gbit / 8 bits) = 6.25 MBytes.`

# Network Disk Performance

10485760, 0xa00000

## I/O

4,096 bytes = 4.096 kb

As you fill the SSD-based instance store volumes for your instance, the
number of write IOPS that you can achieve decreases. This is due to the
extra work the SSD controller must do to find available space, rewrite
existing data, and erase unused space so that it can be rewritten. This
process of garbage collection results in internal write amplification to
the SSD, expressed as the ratio of SSD write operations to user write
operations. This decrease in performance is even larger if the write
operations are not in multiples of 4,096 bytes or not aligned to a
4,096-byte boundary. If you write a smaller amount of bytes or bytes
that are not aligned, the SSD controller must read the surrounding data
and store the result in a new location. This pattern results in
significantly increased write amplification, increased latency, and
dramatically reduced I/O performance.

[source,
aws.](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/general-purpose-instances.html#general-purpose-network-performance)

## PGP Keys

pub rsa4096 2020-06-04 \[SC\] \[expires: 2024-06-04\]
858023A92C8DA82FB996BB37361D5A506F6EB43E uid \[ultimate\] sam bacha
\<<sam@freighttrust.com>\> sub rsa4096 2020-06-04 \[E\] \[expires:
2024-06-04\]

6F6EB43E

Other Keys can be found on
[freight-trust](https://github.com/freight-trust/pki)
