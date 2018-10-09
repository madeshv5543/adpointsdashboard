
<template>
 <div class="content">
 <div class="md-layout">
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options" 
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_R1VEfH69n6_-QpK7QPhk-m4MXK6aaHHUhcbjCU3Fa2bbc9MQ"
 data-background-color="red"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEBUPEhAQFQ8QDw8PEBUQFRUQEBAPFREWFhUVFRUYHSggGBolGxUWITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFRAPFy0dHR0tLS0rKy0tLS0rLS0tKy0tLS0tKy0rLS0tLS0rLS0tLSsrKy0rKys3NystKy0tNzcrLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAACAQMEBQAGBwj/xAA+EAACAQMCBAQDBgQEBgMBAAABAgADBBEFEgYhMVEHE0FhIjJxFCNCgZGhUmKx0VNygsEVJDNDkvCi0uEW/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABsRAQEBAQEAAwAAAAAAAAAAAAABESExEkFx/9oADAMBAAIRAxEAPwDpAWOARAIYjAqgRwKI2IamA6oHYRwKOwjQaK9ZV5sQB7xkDu0dhMC+wkb7Zu+RGPufhX9YS0nb5mx7L/eMgkEqOuIBrp7fkJiWi+oz9Y8tIDoBIGPPHop/SZ5v8kk4ldrmp/Zqe8IzknACjPP3lwSN5/g/aZvP8H7TnGr8e17Y/EoLk8kUMQoz6kTatC4vo19tNm+9KhiBzAzHBfCp3WGHXtH15jMwoO0mBoEe0JQPaYaAg+SfQxgcwOwmFB2EbG4QhV7xkCFIm32h5B9ZhEBpkB9BGzbL2j+2JiMDH2cdpnkDtH5mIxEY0R2gGkO0lEQGWXFRDSHaNVaQx0kwiNsJMg199OO7OTJy0cCTmSNssZEQmpxl6cnOsaZIwVtSnItdDiWjpI9RIyI0fVqtSm27a2PbOI9Q11doznOOc2O6tVcYIlBV4bUsSDyzMWWeDpgEPbEAhCdWibY1XrrTGWOOw6kn2Ey9uhTA5ZdjhV9Sf7QbSy5+ZU+Kqe/RPYSBtDVq9Pu09+dQ/wBpJoWarzxk93+I/vJW2LtkGAwxB2whKDUwxGoamAtY4UkDJAJA7ntOWa3xW1QMbiqKKI5XyUP3u4ejH+06sDKS84VtqjmstGmtfn8ZUNknuD1gcO//AKxat1TUArQ3jeWXe5H6ZnROGuMLA12oLRIYY+Py+R/bl+col8NrtNS3syGhVZmNSkoATJ6bD0+s6fo/DdvaLhKa7m5s7AFmPcmNFnRqAqCvykco5mCrKOWVH7Qgy/xD9YCzMRQR3EXEAcSJqVx5VMuRkDmZLY4E0XXK+qXDNSo0USnnbuc5yPpA2nS7tLmmKiHkZKKsPcTkOlXOo6VcC1ZVqCqSy/h55yQP1nR9P4iyQlamyOe/MfrCLhag9eUPEXAYZ9IDUiOhhWFYMwVMcjDGDAbMQiGwgQG2WNlY+YDCAwRAKx4iARAYZYy6yURG2WEQ2SRqlOT3WNMsCtenGjTk+okZ2wNgAg1agRSx6KMmOCV+q/EUoj8bAn6A/wDv6QrNMpF2Nd+rfIPRVlhXdlGUTefVdwU49cE8sw0QAADoBgfSFiBCGrUQCXcU9g3OK33ZUd+fUe4yJqNz4taeldaQ816ZOHrIv3adiAfice4E2jiHhy21CmKVzT3BTlCCVdD3Uico4k8H69LL2dUVk5/d1MJWA/lPyt+0swdps7mnWRatJ1em4DIyHcrDuCI/ieauG+Jr7RaxQo6pu+9t66sisfUrkfCf5hy+s7vwlxdbalT30XxUUDzKT4FWmfceq/zDlFgvsTBCmqcecYpp1MKoD3VUE00PyqvQu/t2HrINh1DUqNsnmVqqU0Hq5xn6dzNI1bxYoJlbei9U/wAT/dJ+4yf0nKNS1KtdVDVr1GqOfVug9lHQD2EaRIa+LbdT8SNQrfLUWkp9Kagkfm2ZQXGu3lTm11XP+oj+kYWlmH9nhcRnva3+NV/82/vBGo1x0rVR/rb+8ktbyO1GDIfo8RXic1uqw/1Z/rLmw8SdQo9aocdnUf1E1l6UaZISx1LS/GToLi3Pu1M5/bE3jROOrG75JWUMfwv8J/eecGWMlcc/WEx6R1/hpr2slbzgq0jup7OZJ9z2lxb0H5JVVXAHJp500Lja+siPLrMyD8FT4l/XqJ0/hjxct65FO5XyahwN3WmT9fSEdLUADA6QozbXKVVDoyspGQVIIjokCMoMYakRzWSoOJRGWr6HkYREOrTB6yM25PdYBsIBMNXDDlEYQGiYDCGwgEwAIgMIL1Dn2jT1TKDYRlxG3cxtskSIWpiMYEwq3/og7WgbAJAT4rr/ACJyk4GV9q3/ADL/AOURfGotxCxBBhiEarxhxNWtGWhb2r1a9RSyu3w29MA8y7Z/aaDdGoGF5qF87OOaKjvStVPamikNVP0wPedkubVKi7XUMvYjIlBb8C2YuDdOr1aufh89jUVP8qnkJrYKLh521hWp3dgXsghNKvcgJXZ88tigfCuOmDn3lzw14f2Wn1DWpI7Vstteq2401P4VwAAPfr7zalXHIDkOmOQEITPoBjgZPQDJ9gOs818S6u15d1bhj87kIP4aY5IB+QE9HaqD5FXHXyamPrsM8tKY+liVTaSqZkFWj6VJG4sKRktMSrp1P1klK0KmsokWqkw15uXCvAVa7xVr7qVueYyMVag/lB+Ue5gtapo2g1ryp5VBCx/ETyRB3Y+k6NT4G0yxoj7fUVqtUhQSxXDHlimvX85cLrdlaFtPsjTFwiM2NpdQ6jnvI5u3tmadW1Rryg7G6t6lxQY1HerRO1aB9NpXIwe0rHUHifw0dAa1k/n0RzKZzWQdcYHzf1nOq1EqSrAhgcEEEEH3BnW01qvTpJdW1ay3jFK5YkrTZh8vPljI9DLq90ix1lV3otO6emWStQKsGYfMOXzAHv8ArIrgbrGHWbTxlwnW0yqKVUqyuC1N06OoODyPMHmJrbCVmxccMcY3WnODSctSz8VNyShHt2ndeCvEC21JQufLuAPipuQD/p58xPNjiJRrNTYOjMrqcqynBB+sI9iSPdXIQcyNx5KPUmcr8OPFMVStpfMFq8lp1eiuezdjNl8RuHrm6SnWs6rLcUTlQG2hlPWBTcZ8e3mnVgj26Gm4yhB6+02ngjihNTt/NA2sp2up9G5f3nHtV4S1q7Oa9N3NMfDuZf2lRouu3ujViu0pk/HTqDAb3H6S6j0hVoEfEvXtEpVQ31HUTnWh+L9GqVp1qLo7EKNo3gk/SdDdN4FROTEZHpn6yKNhG2WFQrbh/MOohMIEWosa8sdpLdI0ywhnaO0ErHWWNmA0wgYjjQIVNBlcTtuQf4lxLASDqlP5XHVSP0hYtFMeUyJb1NwB7iSVMIdhCADCWUGIsQQoCMuRj0IwfpPMXFmmG0va1AjktRmT3pscr+xnp8Cc08Y+FTcUhe0lzVojFQDq9L+4idI4wjy64Yq2guFN6KhtsHPl5zu9CccyOvSa6rx1akjbtlXi7QgothQDUD1K0CAvvk4fPuOcjVuBLK9XzNOvFz18tiai/Tn8a/mDOQLVj1vcsjBkZlYdGUlWH0IhHceHeC7fTaZvL10epTG7OCaVL0G0fjb3x9BIPFfF/wBot1rULqrb25qNTYrS31GccwG+IFF9h1mm6P4m39uArVFroPSuMnHbcMH9czbLLxK0+4XZdWzUS3VqYFRM9+XP9RCq7U9Ww1G7W+2UKu0hGpO6MyHDjkpKZ7fWLcXfk3Subm0+yV1DhHRUdrep1AYJ8XP0J+s2T/hlre0GSyvbao+7fTWutJwh9QUUA4PfGZUalwxf/ZQtSztKtajUxTCKGpNbkfhHIqc+kUQLK2YXFSyqCwNOuSqonwVWbrRLIMZ5dpvGnpR0TT/OrimrjJZaW4g1GPKnT3EnmcZP1MzhzTEtrddQvqVGlc0qBVm6ijRGcAEk88fXrick4q1241u8CUkdkBKW1FeZC+rN7nGST0ESM1T8Q6zX1G5NepkvUYLTRckIvRUQev8Auec3nQ/CZfsrXGoV2oHYXCrt+5XGc1CeRPsJsnC3CNrotE317UQ3Cg5c80pZ/BSHVnPTPXtiaDxb4lVru5puigWlvWSqlF+YrFGBBrY6/T0+sI0S/pKlRkVt6q7BHwV3oGIDYPMZHOQ2nXdS47028pVjdC5cVaWKVs1Gkfs1YLgNRuEwQM/xf/k5G0Bpp2Lwk8RDldOu3zn4beqx6n/Dc/0M460Ddzz6gggjqD3Eo9lGUPFPDFvqFI06qjdg7HHzqe+fzlP4UcVHUbEeYc3NsRRrd2GPgf8AMfuDNzMg5xwR4ZpZVmr13WqysRRwMBV7n3nRJhg5gR7qkc71+Yf/ACEKjXDjP6jsY47gdSB9TiRXpEOHTGDycehHcQJBgEQiYJMAGEadY6TAMojukaxJTCNYkD4iVEyCO8UQxKIFi2xjTPf4ZaqZBvKGfiHzCO2dfcMHqOsgmiLvA6kQBNZ16uaNQO9Q+UfQSjZKuoU16sJS3XGtsrikrbnJwMdM+5lJairdMUpptp5xubmcS3PC1GlQbCg1MElj1ziVU+01w79tRQFb5WByPoZduoYYOCCMdwRON6ZrCF3po/xKxV6bnoQccu03DhXisF/s1bKv+Dd+IexksRzzxP4Ca1drq3Um3clnVRzpnuAPSc4Dz17WpLUUqwBVhgg8wROOeIHhaQWubIcuZal/9e0vo5QKkc8yRqyMjFHBVlOCG5EGIHkxdTBUi+ZIYqQhUhU1KpByCQw5gg4IPsZsujeIGoWuAl07oPwV/vV+mTzH5GaeKkXfA9DXj0+I9LC0awp18o7Ju5JWXqtRRzKeoP0Mf0zTLLh+13tl7hxglVDXFw457KajntGen5meerHUatBxUo1XpuOjU2Kn9us2rhbxDr214bq5L3Aen5Lbm+8RM5zTzyBz+sIhcbcU3OoXBauGRUP3VHmFpKfY9WPqf9prJedH4w4s065sGo77i4u9+6hVr00SrRG4EqaigbhjM5kxgGWjbGCWgF4RhMbYxWaATA6R4DX5TU2o5+G4tqgI/mpkOp/Td+s9CGed/AixNTVfNA+GhbVWY+gZ8Io/cn8p6JMUNmQ9U1ClbUXr1nCUqa7mZuXLsO5J5Yk0icr4q4kvW1R9KNDTxaugakL8N5d0NoPJ843E5AGOWJBFuqT8QBNQtjXFK3fY1rcE0KVbHMlKlPPPp16dJGvuKDpQD02uqbCoq1bC+zUyhPN7etk5A+pHsJtNnwpd2dNamn1losVD1LKsWuLIVG5sKT/OnMnmOXtKTRdRctVseIPL3Van/LCvSHksD/h1x8PU4A5Ed4G46XxhZ3G1RWFOsyhvKrg0aoz/ACvgn8pdkzmGrWVOhcCwo16F3uVai2WoHe4U5wKFyQSrYGQpJ5TftE0xLWkKdMOFJ3lXqNV2Ejmqsx+UeglRYEwCYRjbQpCYGYjGBmREoQxAEIGVTgEh16JU71kwGKRmANvWDD3mvcQ6G9R1qhiVXnt9DLmpSKHcOklW9YMPeINa0eqRW5nYOm30MsuMXf7HUNJsOUbbjviSr7Skqc8YbvNW4nW7o0GVFLjB5ess9HKNO0by2NzcVMEEscHHP3x1jt9q1fUKyJbIw8s/C45HPc9pP0jg+71Crur7kpg/L7TsXDPClCzQBUG7lzlvBI4Po3KW6rcsGqbevSXpGYIMITA07jDw9tr8Ftuyt6OvI59+84jxRwDd2BJKGpSB+dB0HuJ6ggVqKuNrKCPeWUeNswg09HcTeF1nd5dV8uofVOX6zluv+E17b5NPFVB25NKa0TfM3xy906tRO2rSqIR/EpA/WRN0Gn98wvGN0TdIHt0QvGS8EvAdLQCY3uiFoBFoVCmzsERSzsQqqvMsx6ACWvDvC13qDhbeixB6uw20lHcsZ3vw+8NaGmYr1CK14R85GEpe1Mf7wJPhZwh/wyzxUA+1VyKlf+Tl8NPPsM/mTNzMzdNG428QqdlWWypUGururgeUhwAG5AMcHme0go+KuO7e7vhoqqz0KjrSq16Vf7O1OuGzlW6Mq7eYPU/SFrGj6hbU/KuKSaxpwOQtQBL6indWGS5A9RzPtKywfR1Z7a/0p7KpdMCTXBNLdj/t1R/0/XsJf09B1HThv066F1aYyttdNlgvalWH7Sin4e4b0LUMi3q3dOqvJrd6706tMjqNr5J+oJlRxZqNvp3mUKV3du1Jwj2Wo02uba6p9CabsvwDnyII6TYbvUdK1RxRvrd7LUFI2mr9xWDDoadYcm595e6Fo19QqilXuqN3YBWKNcJm6pty2ru6MOvMwK3gPhWy+71ajRem9xbqVpOxqJQJ+byy3P0wCfTpjM3jMOAYAkwSZhgEyIFoGYZMCFTcTMRVOYWJQghgwYogH1karQ2nIkgGGIDNC5zyPWSWQMMEAiRqtDPMQaVYryMCVQoKvygCPiM06gMdgFCEAQhIChCADEdsDMByIWHTIkKldFsyHVrYB3HDekuCVe6Rb1wQ9JGHrkAzUdV8J9Pr5K09jH1T4f6SPrfGa2NFiWy7ZCj1Le0o+DPEG4Zi1wAKJOVPtE1DF/4GjOaVy47BsH/aUV14K3q/JVpMPfIndtM1ijcKGpupz2Mn5l+RjzW/g9qYPSl/5H+0co+DOoseZor+bH/aejyYJaNHC9P8C6p/610oHr5a8/3m56H4R6dbYZ0as4xzrEEZ/wAuMTfy0AtJqm7a2SkoSmiqo6BQAB+kcLRCY1VbkcYzjl9YGseIXGaaXb7hhrh/hop3Pc+0paPCyatb07+tRNnqDAVFqW7bXBx8LN/Yyj4lrU7mubXVrfymLkWtzT+TBPIFvQxytdavpdFhTK3tpsIpP/3aYxyJx1A5RgY40Oq0LKra3NvSvaDIVp3CqfNpH0Z1HqO4jPh9rGpU7OmltUs7umgO6g7tTuqPPOzJ6y58JeIKlzRqC6ulesajYpPgOi9jnrE440fTEroTXNne1SfLqUDsycj5gORgTRrFDUnFjf6VcJVYHaatMPTHI5K1R8s27StOp2tFLelu8umu1dxLHGfUnrIXDVtcUqAW6rrWqgnDqu3Ken5y0LQgswS0EtALQoiY2TMLQCYRhg5iEwd0gmjlHkqCVv2mCbgzSrgTMSFb3feTUYGQLiKDMxMxAIGY9MGJCECM1Mr0j1K59DHY3Uog9IEhWBhyuAZY/Tue8CXmZAWoDCBgQLtCOYOBOf8AG/FCW4xu+LpgdSZ02sm4ETm/Evh8K1U1wSW9PUSzo0KnTF4RVrcgOaqe0quIbhseXS/6fQkevtHeLre4t28vYwQdWHQ+0orTUiOTcxF4entD4iuLJw1NzgHmp6H+07r4e8bNfrhkIZcAn0z7Gcq4f4X+3uCAQmeZncOGtAp2dIIqgEARzEXhaCWgkxsmRRlohaNFoheBle4VAWYgAdSek0biS7W8cG11EU6tMnCjBVj2IheJthd3NsUtmwD82OpHbM0vh/S9PakLatTNG6XluOVbd3DesuC71G+uxTNHULNbigRjzaOGOO+3rKLTeLP+HN93VNaxJ50qmRVojsM8yB2MvFF/p3NW+1Wnbkair/vJKUdM1dSGQJW6MD8Dgwhaug2GrKLu1qeVcYyHona4PZh6yt0Lw/uTqH2m/rectEDyifxkdMj0xEsfDi4srlatpdFaZYb1bnle06cmcAHrjnALMHMRjAJgKWgEzCYBMBS0EmCTGy0gMmDmAWg7oCCFEEIQMHLpJdvc4kXEWBdUqwMdlJSrESxt7rMKlxREU5hQFEWJFgZAegDDiiBFNMiEtwR1kmCyAwrEuAY5uB7SM1v2jRVhCI2s6DSuFKsoOe4nM9S8KlNbchITOSPT+k6p57CKLoeollFbwzoSWlMKqgYEuyYx9oHeL5g7yIcJgEwd8QmFITKjiOjVeiwoth8HB95akwSZRxqy4u1Cyq+TcoWXONwBwZsVxf2V+uKqBHPRuQwfYzatb0KlcKcqN3ocTm3EtjUs6bDyty45EdRH4LNUu7HnSf7Rbfwk7mA9u81jivXKL1aT2yNTvN6AgDaTz5g95I4Ktr6pTNRauVycI+TgdpumhaGKritXoIKqnkcD9YxG06RUY0UL/PtGfriS8wAMchEJgKTAYxSYBMgQmATFJgEyhCY2xikwGMIQmDmYTAzAfEIRZkilEyLMgJFViJkyBNt7uWNKqGmTIqnIsyZAyZMmQMi5mTICZiEzJkBtgIy9IGZMgMtbxpqJmTIAFX7xCXiTICbnkikTjnFmQCJkW9tEqqVYAg95kyUaxb8PPQrbqTEUyclR0m00+QHeZMjUKTBJiTJAJMEmZMgATAJmTIAMY2xmTIQ2xgZmTIH/2Q=="> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div>
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://mk0ninjaoutreacgog6y.kinstacdn.com/wp-content/uploads/2017/03/Advertising-strategy.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div>
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSUZ1oLP3VWykVGS3Mk3UqXrmtUWkp2OLsBh26PBKVipWUhSAqbA"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuXc8UZXfYtSLVnphHWFAwNHHIGPZNSOerUHDqHTYy-RvXZ3v6qA"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-type="'Line'"
 chart-image="http://digitalgateway.in/Blogimages/142-advertisement1.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template>
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="http://ghotchkiss.files.wordpress.com/2014/07/ibm-human-brain-supercomputer-future-technology-1.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_R1VEfH69n6_-QpK7QPhk-m4MXK6aaHHUhcbjCU3Fa2bbc9MQ"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer"> 
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="data:image/jpeg;base64,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"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div>
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="http://ghotchkiss.files.wordpress.com/2014/07/ibm-human-brain-supercomputer-future-technology-1.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div>
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"> 
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'" 
 chart-image="data:image/jpeg;base64,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"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0IpuIFZzOVl6zBRQ07AirKqlcb8HWTTBnOf5oRCO1O_fg8I1"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>345354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template>
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="http://ghotchkiss.files.wordpress.com/2014/07/ibm-human-brain-supercomputer-future-technology-1.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://mk0ninjaoutreacgog6y.kinstacdn.com/wp-content/uploads/2017/03/Advertising-strategy.jpg"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div> 
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template> 
 </chart-card>
 </div>
 <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
 <chart-card 
 :chart-options="dailySalesChart.options"
 :chart-type="'Line'"
 chart-image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDl_R1VEfH69n6_-QpK7QPhk-m4MXK6aaHHUhcbjCU3Fa2bbc9MQ"> 
 <template slot="content">
 <h4 class="title">TITLE</h4>
 <p class="category">
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
 </p><br>
 <div>
<div style="display:inline-block"><strong>3,45,354</strong><br>start date</div>
<div style="float:right"><strong>chennai</strong><br>end date</div>
 </div>
 </template>
 <template slot="footer">
 <md-button class="md-dense md-raised md-primary" @click="view">view</md-button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
 <md-button class="md-dense md-raised md-primary" @click="sponser">sponser</md-button>
 </template>
 </chart-card>
 </div>
 <!-- <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"> -->
 <!-- <stats-card data-background-color="green">
 <template slot="header">
 <md-icon >store</md-icon>
 </template>

 <template slot="content">
 <p class="category">Revenue</p>
 <h3 class="title">$34,245</h3>
 </template>

 <template slot="footer">
 <div class="stats">
 <md-icon>date_range</md-icon>
 Last 24 Hours
 </div>
 </template>
 </stats-card> -->
 <!-- </div>
 <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
 <stats-card data-background-color="orange">
 <template slot="header">
 <md-icon >content_copy</md-icon>
 </template>

 <template slot="content">
 <p class="category">Used Space</p>
 <h3 class="title">49/50
 <small>GB</small>
 </h3>
 </template>

 <template slot="footer">
 <div class="stats">
 <md-icon class="text-danger">warning</md-icon>
 <a href="#pablo">Get More Space...</a>
 </div>
 </template>
 </stats-card>
 </div> -->
 <!-- <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
 <stats-card data-background-color="red">
 <template slot="header">
 <md-icon >info_outline</md-icon>
 </template>

 <template slot="content">
 <p class="category">Fixed Issues</p>
 <h3 class="title">75</h3>
 </template>

 <template slot="footer">
 <div class="stats">
 <md-icon>local_offer</md-icon>
 Tracked from Github
 </div>
 </template>
 </stats-card>
 </div> -->
 <!-- <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
 <stats-card data-background-color="blue">
 <template slot="header">
 <i class="fab fa-twitter"></i>
 </template>

 <template slot="content">
 <p class="category">Folowers</p>
 <h3 class="title">+245</h3>
 </template>

 <template slot="footer">
 <div class="stats">
 <md-icon>update</md-icon>
 Just Updated
 </div>
 </template>
 </stats-card>
 </div> -->
 <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
 <md-card>
 <md-card-header data-background-color="orange">
 <h4 class="title">Employees Stats</h4>
 <p class="category">New employees on 15th September, 2016</p>
 </md-card-header>
 <md-card-content>
 <ordered-table table-header-color="orange"></ordered-table>
 </md-card-content>
 </md-card>
 </div> -->
 <!-- <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50">
 <nav-tabs-card>
 <template slot="content">
 <span class="md-nav-tabs-title">Tasks:</span>
 <md-tabs md-sync-route class="md-success" md-alignment="left">

 <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
 <nav-tabs-table></nav-tabs-table>
 </md-tab>

 <md-tab id="tab-pages" md-label="Website" md-icon="code">
 <nav-tabs-table></nav-tabs-table>
 </md-tab>

 <md-tab id="tab-posts" md-label="server" md-icon="cloud">
 <nav-tabs-table></nav-tabs-table>
 </md-tab>
 </md-tabs>
 </template>
 </nav-tabs-card>
 </div> -->
 </div>
 </div>
</template>

<script>
import {
 StatsCard,
 ChartCard,
 NavTabsCard,
 NavTabsTable,
 OrderedTable
} from "@/components";

export default {
 components: {
 StatsCard,
 ChartCard,
 NavTabsCard,
 NavTabsTable,
 OrderedTable
 },
 data() {
 return {
 dailySalesChart: {
 data: {
 labels: ["M", "T", "W", "T", "F", "S", "S"],
 series: [[12, 17, 7, 17, 23, 18, 38]]
 },
 options: {
 lineSmooth: this.$Chartist.Interpolation.cardinal({
 tension: 0
 }),
 low: 0,
 high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
 chartPadding: {
 top: 0,
 right: 0,
 bottom: 0,
 left: 0
 }
 }
 },
 dataCompletedTasksChart: {
 data: {
 labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
 series: [[230, 750, 450, 300, 280, 240, 200, 190]]
 },

 options: {
 lineSmooth: this.$Chartist.Interpolation.cardinal({
 tension: 0
 }),
 low: 0,
 high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
 chartPadding: {
 top: 0,
 right: 0,
 bottom: 0,
 left: 0
 }
 }
 },
 emailsSubscriptionChart: {
 data: {
 labels: [
 "Ja",
 "Fe",
 "Ma",
 "Ap",
 "Mai",
 "Ju",
 "Jul",
 "Au",
 "Se",
 "Oc",
 "No",
 "De"
 ],
 series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
 },
 options: {
 axisX: {
 showGrid: false
 },
 low: 0,
 high: 1000,
 chartPadding: {
 top: 0,
 right: 5,
 bottom: 0,
 left: 0
 }
 },
 responsiveOptions: [
 [
 "screen and (max-width: 640px)",
 {
 seriesBarDistance: 5,
 axisX: {
 labelInterpolationFnc: function(value) {
 return value[0];
 }
 }
 }
 ]
 ]
 }
 };
 },
 methods:  {
     view: function (){
         window.location.href = "http://localhost:8080/#/viewcampaign"
     },
     sponser: function () {
         window.location.href = "http://localhost:8080/#/sponser"
     }
 }
};
</script>
<style>
.md-card-img {
 width: 100%;
 height: 170px;
}

</style>

