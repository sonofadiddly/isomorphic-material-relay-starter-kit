import { fromGlobalId, mutationWithClientMutationId } from "graphql-relay";
import { GraphQLString, GraphQLInt, GraphQLBoolean, GraphQLID, GraphQLNonNull } from "graphql";

import { DS_Compendium_get, DS_Compendium_update } from '../../data/Compendium';

import CompendiumType from '../type/CompendiumType';


export default mutationWithClientMutationId( {
  name: 'Compendium_update',
  inputFields: {
    id:                                 { type: new GraphQLNonNull( GraphQLID ) },
    Compendium_FirstTextInput:          { type: new GraphQLNonNull( GraphQLString ) },
    Compendium_RangedNumber:            { type: new GraphQLNonNull( GraphQLInt ) },
    Compendium_Excitement:              { type: new GraphQLNonNull( GraphQLInt ) },
    Compendium_FollowUpQuestion:        { type: new GraphQLNonNull( GraphQLString ) },
    Compendium_FavoriteMammal:          { type: new GraphQLNonNull( GraphQLInt ) },
    Compendium_FavoriteMammalOtherText: { type: new GraphQLNonNull( GraphQLString ) },
    Compendium_LastText:                { type: new GraphQLNonNull( GraphQLString ) },
    Compendium_LikedSunset_Ocean:       { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Lake:        { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Mountains:   { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Plains:      { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Purple:      { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Green:       { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_Other:       { type: new GraphQLNonNull( GraphQLBoolean ) },
    Compendium_LikedSunset_OtherText:   { type: new GraphQLNonNull( GraphQLString ) },
  },
  outputFields: {
    Compendium: {
      type: CompendiumType,
      resolve: ( {localCompendiumId} ) => DS_Compendium_get( localCompendiumId ),
    },
  },
  mutateAndGetPayload: ( {
    id,
    Compendium_FirstTextInput,
    Compendium_RangedNumber,
    Compendium_Excitement,
    Compendium_FollowUpQuestion,
    Compendium_FavoriteMammal,
    Compendium_FavoriteMammalOtherText,
    Compendium_LastText,
    Compendium_LikedSunset_Ocean,
    Compendium_LikedSunset_Lake,
    Compendium_LikedSunset_Mountains,
    Compendium_LikedSunset_Plains,
    Compendium_LikedSunset_Purple,
    Compendium_LikedSunset_Green,
    Compendium_LikedSunset_Other,
    Compendium_LikedSunset_OtherText,
  } ) => {
    var local_id = fromGlobalId( id ).id;
    DS_Compendium_update(
      local_id,
      Compendium_FirstTextInput,
      Compendium_RangedNumber,
      Compendium_Excitement,
      Compendium_FollowUpQuestion,
      Compendium_FavoriteMammal,
      Compendium_FavoriteMammalOtherText,
      Compendium_LastText,
      Compendium_LikedSunset_Ocean,
      Compendium_LikedSunset_Lake,
      Compendium_LikedSunset_Mountains,
      Compendium_LikedSunset_Plains,
      Compendium_LikedSunset_Purple,
      Compendium_LikedSunset_Green,
      Compendium_LikedSunset_Other,
      Compendium_LikedSunset_OtherText,
    );
    return {local_id};
  },
} );
