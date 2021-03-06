library(readr)
library(tidyverse)

data_2015 <- read_csv("../data/gva_release_2015_raw_incidents.csv")

data_2015 %>% 
  mutate(texas = ifelse(state == "Texas", 1, 0)) %>% 
  group_by(texas) %>% 
  summarise(num_incidents = n()) 

## In 2015, there were 962 homicides in Texas, and there were 11,621 homicides nationwide.
## Thus, Texas comprises 8.28% of all homicides (in 2015).

data_2015 %>% 
  filter(state == "Texas") %>% 
  group_by(city_or_county_guardian_corrected) %>% 
  summarise(num_incidents = n()) %>% 
  filter(city_or_county_guardian_corrected == "Houston") %>% 
  summarise(sum(num_incidents))

## 962 incidents in Texas, and 244 took place in Houston. Thus, 25% (1 in 4) Texas homicides took place in Houston.

data_2015 %>% 
  filter(state == "Texas") %>% 
  mutate(top_three = ifelse(city_or_county_guardian_corrected == "Houston"|
                              city_or_county_guardian_corrected == "San Antonio"|
                              city_or_county_guardian_corrected == "Dallas"|
                              city_or_county_guardian_corrected == "Fort Worth", 1,0)) %>% 
  filter(top_three == 1)
         
## There are 962 homicides in Texas in 2015.
## Roughly 50% (450 homicides) of them took place in one of three cities: Houston, San Antonio, or the DFW area.

data_2015 %>% 
  filter(state == "Texas",
         city_or_county_guardian_corrected == "Houston")

## Houston: 244

data_2015 %>% 
  filter(state == "Texas",
         city_or_county_guardian_corrected == "Dallas" | city_or_county_guardian_corrected == "Fort Worth")

## DFW: 120

data_2015 %>% 
  filter(state == "Texas",
         city_or_county_guardian_corrected == "San Antonio")

## San Antonio: 86