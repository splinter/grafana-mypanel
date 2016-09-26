#Introduction
This panel was written by following the reference plugin implementation provided in:

https://github.com/grafana/clock-panel

and the official developer documentation found here:

http://docs.grafana.org/plugins/development/

#Prerequiste 
1. Grafana v3.1.1

#Installation
1. Locate the plugin directory for your Grafana installation. The default plugin directory for Linux distributions is /var/lib/grafana/plugins [1]
2. Clone this repo to the plugin directory
```bash
   git clone https://github.com/splinter/grafana-mypanel.git
```

#Making changes
1. Create a distribution by using the following command in this directory
```bash
   grunt
```

#References
[1] http://docs.grafana.org/plugins/installation/
